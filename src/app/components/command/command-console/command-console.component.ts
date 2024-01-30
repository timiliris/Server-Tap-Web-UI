import { Component, OnInit } from '@angular/core';
import {WebSocketService} from "../../../services/websocket/web-socket.service";


@Component({
  selector: 'app-command-console',
  templateUrl: './command-console.component.html',
  styleUrls: ['./command-console.component.scss'],
})
export class CommandConsoleComponent  implements OnInit {

  constructor(protected webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.connect();
  }

}
