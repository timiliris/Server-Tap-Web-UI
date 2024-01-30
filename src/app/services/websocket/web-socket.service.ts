import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment.prod";
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { ConsoleMessage } from "../../shared/serverTap.interface";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$?: WebSocketSubject<any>;
  private readonly maxRetries = 5;
  private retries = 0;
  private isConnected = false;

  messages: ConsoleMessage[] = [];
  messageSubject: Subject<ConsoleMessage[]> = new Subject<ConsoleMessage[]>();

  apiKey: string = environment.api_key;

  constructor() { }

  connect() {
    document.cookie = `x-servertap-key=${this.apiKey}`;

    const wsUrl = 'ws://localhost:4567/v1/ws/console';

    this.socket$ = webSocket(wsUrl);
    this.socket$.subscribe(
      (message: any) => {
        this.isConnected = true;
        if (typeof message === 'string') {
          try {
            const parsedMessage: ConsoleMessage = JSON.parse(message);
            this.messages.push(parsedMessage);
            this.messageSubject.next(this.messages);
          } catch (error) {
            console.error('Error parsing message:', error);
          }
        } else if (typeof message === 'object') {
          this.messages.push(message);
          this.messageSubject.next(this.messages);
        } else {
          console.error('Unknown message format:', message);
        }
      },
      (error: any) => {
        console.error('WebSocket error:', error);
        this.isConnected = false;
        this.handleReconnect();
      }
    );

    // Vérifier la connexion toutes les 30 secondes
    interval(30000).subscribe(() => {
      if (!this.isConnected) {
        console.log('WebSocket is not connected. Attempting to reconnect...');
        this.handleReconnect();
      }
    });
  }

  private handleReconnect() {
    if (this.retries < this.maxRetries) {
      console.log('Attempting to reconnect...');
      this.retries++;
      // Reconnexion après une courte pause
      interval(2000).pipe(take(1)).subscribe(() => {
        console.log('Reconnecting attempt', this.retries);
        this.connect();
      });
    } else {
      console.error('Max retry attempts reached. Could not reconnect to WebSocket.');
    }
  }

  sendCommand(command: string) {
    if (this.socket$) {
      this.socket$.next(command);
    } else {
      console.error('WebSocket is not connected.');
    }
  }

  getMessages(): Observable<ConsoleMessage[]> {
    return this.messageSubject.asObservable();
  }
}
