import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {OnlinePlayers} from "../../../shared/serverTap.interface";
import {PlayersService} from "../players.service";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent  implements OnInit {
 OnlinePlayerList?: OnlinePlayers[];

  constructor(public api: ApiService, public player: PlayersService) { }

  ngOnInit() {
    this.getAllPlayers()
  }

  getAllPlayers(){
    this.api.getOnlinePlayers().subscribe((Players: OnlinePlayers[])=> {
      this.OnlinePlayerList = Players
    },(error)=>{
      console.log(error)
    })
  }

}
