import { Component, OnInit } from '@angular/core';
import {ServerInfo} from "../../../shared/serverTap.interface";
import {ApiService} from "../../../services/api/api.service";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-dashboard-server-panel',
  templateUrl: './dashboard-server-panel.component.html',
  styleUrls: ['./dashboard-server-panel.component.scss'],
})
export class DashboardServerPanelComponent  implements OnInit {
  serverInfo?: ServerInfo;
  constructor(private api: ApiService) {
    this.getServerInfo()
  }

  ngOnInit() {
    this.getServerInfo()
  }
  getServerInfo(){
    console.log('trigger')
    this.api.getServerInfo().subscribe((info: ServerInfo) =>{
      this.serverInfo = info
      console.log(this.serverInfo)
    }, (error) =>{
      console.log(error)
    })
  }

  protected readonly environment = environment;
}
