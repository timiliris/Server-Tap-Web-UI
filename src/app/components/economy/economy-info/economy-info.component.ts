import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {EconomyInfo} from "../../../shared/serverTap.interface";

@Component({
  selector: 'app-economy-info',
  templateUrl: './economy-info.component.html',
  styleUrls: ['./economy-info.component.scss'],
})
export class EconomyInfoComponent  implements OnInit {
  economyInfo?: any;

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.loadEconomyInfo()
  }

  loadEconomyInfo(){
    this.api.getEconomyPluginInfo().subscribe((info: EconomyInfo)=>{
      this.economyInfo = info
    }, (error) => {
      console.log(error)
    })
  }

}
