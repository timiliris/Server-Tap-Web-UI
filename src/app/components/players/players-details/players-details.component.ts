import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../players.service";

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.scss'],
})
export class PlayersDetailsComponent  implements OnInit {

  constructor(public player: PlayersService) { }

  ngOnInit() {}

}
