import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {ServerInfo} from "../../../shared/serverTap.interface";

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
})
export class DashboardMainComponent  implements OnInit {
  serverInfo?: ServerInfo;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getServerInfo()
  }

  getServerInfo(){
    this.api.getServerInfo().subscribe((info: ServerInfo) =>{
      this.serverInfo = info
    })
  }

}
