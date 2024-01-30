import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment.prod";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Advancement, AllPlayers, EconomyInfo, OnlinePlayers, ServerInfo } from "../../shared/serverTap.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.api_url;
  apiKey: string = environment.api_key; // Ajoutez la clé API

  constructor(public http: HttpClient) { }

  // Fonction pour créer les en-têtes avec la clé API
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'key': `${this.apiKey}`
    });
  }

  getServerInfo() {
    return this.http.get<ServerInfo>(`${this.baseUrl}v1/server`, { headers: this.createHeaders() });
  }

  getOnlinePlayers(): Observable<OnlinePlayers[]> {
    return this.http.get<OnlinePlayers[]>(`${this.baseUrl}v1/players`, { headers: this.createHeaders() });
  }

  sendMessageToPlayer(data: any) {
    return this.http.post(`${this.baseUrl}v1/chat/tell`, data, { headers: this.createHeaders() });
  }
  sendMessageToAll(data: any){
    return this.http.post(`${this.baseUrl}v1/chat/broadcast`, data, { headers: this.createHeaders() })
  }
  getAllPlayers():Observable<AllPlayers[]>{
    return this.http.get<AllPlayers[]>(`${this.baseUrl}v1/players/all`, { headers: this.createHeaders() })
  }
  getEconomyPluginInfo():Observable<EconomyInfo>{
    return this.http.get<EconomyInfo>(`${this.baseUrl}v1/economy`, { headers: this.createHeaders() })
  }
  EconomyPayPlayer(data: any){
    return this.http.post(`${this.baseUrl}v1/economy/pay`, data, { headers: this.createHeaders() })
  }
  EconomyWidthdrawPlayer(data: any){
    return this.http.post(`${this.baseUrl}v1/economy/debit`, data, { headers: this.createHeaders() })
  }

  SendCommand(data: any){
    return this.http.post(`${this.baseUrl}v1/server/exec`, data, { headers: this.createHeaders() })
  }
  getAdvancement():Observable<Advancement[]>{
    return this.http.get<Advancement[]>(`${this.baseUrl}v1/advancements`, { headers: this.createHeaders() })
  }
}
