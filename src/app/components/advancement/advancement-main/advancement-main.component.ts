import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {Advancement} from "../../../shared/serverTap.interface";

@Component({
  selector: 'app-advancement-main',
  templateUrl: './advancement-main.component.html',
  styleUrls: ['./advancement-main.component.scss'],
})
export class AdvancementMainComponent  implements OnInit {
  advancementList?: Advancement[];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.loadAdvancement()
  }

  loadAdvancement(){
    this.api.getAdvancement().subscribe((advancement: Advancement[])=> {
      this.advancementList = advancement
      console.log(advancement)
    })
  }

}
