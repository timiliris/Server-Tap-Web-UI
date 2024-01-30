import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {OnlinePlayers} from "../../../shared/serverTap.interface";
import {interval, Subscription, takeWhile} from "rxjs";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-players-online-display',
  templateUrl: './players-online-display.component.html',
  styleUrls: ['./players-online-display.component.scss'],
})
export class PlayersOnlineDisplayComponent  implements OnInit {
  OnlinePlayerList?: OnlinePlayers[];
  refreshSubscription?: Subscription;
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getAllPlayers()
    this.startRefreshTimer()
  }
  startRefreshTimer() {
    const refreshIntervalSeconds = environment.refresh_rate || 60; // Default to 60 seconds if not specified in environment
    this.refreshSubscription = interval(refreshIntervalSeconds * 1000)
      .pipe(
        takeWhile(() => true) // Keep refreshing indefinitely
      )
      .subscribe(() => {
        this.getAllPlayers()
      });
  }
  getAllPlayers() {
    this.api.getOnlinePlayers().subscribe((players: OnlinePlayers[]) => {
      const newPlayersData = JSON.stringify(players);
      const oldPlayersData = JSON.stringify(this.OnlinePlayerList);

      if (newPlayersData !== oldPlayersData) {
        this.OnlinePlayerList = players;
      } else {
      }
    }, (error) => {
      console.log(error);
    });
  }

}
