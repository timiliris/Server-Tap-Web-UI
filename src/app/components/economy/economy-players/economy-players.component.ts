import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {AllPlayers} from "../../../shared/serverTap.interface";
import {environment} from "../../../../environments/environment.prod";
import {HttpParams} from "@angular/common/http";
import {IonInput} from "@ionic/angular";
import {interval, Subscription, takeWhile} from "rxjs";
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-economy-players',
  templateUrl: './economy-players.component.html',
  styleUrls: ['./economy-players.component.scss'],
})
export class EconomyPlayersComponent  implements OnInit {
  AllPlayers?: AllPlayers[];
  refreshSubscription?: Subscription;
  constructor(private api: ApiService,private popoverController: PopoverController) { }

  ngOnInit() {
    this.loadAllPlayers()
    this.startRefreshTimer()
  }
  async closePopover() {
    await this.popoverController.dismiss();
  }
  loadAllPlayers() {
    this.api.getAllPlayers().subscribe((players: AllPlayers[]) => {
      const newPlayersData = JSON.stringify(players);
      const oldPlayersData = JSON.stringify(this.AllPlayers);

      // Comparer les chaînes JSON pour déterminer si les données ont changé
      if (newPlayersData !== oldPlayersData) {
        this.AllPlayers = players;
      } else {
      }
    });
  }

  startRefreshTimer() {
    const refreshIntervalSeconds = environment.refresh_rate || 60; // Default to 60 seconds if not specified in environment
    this.refreshSubscription = interval(refreshIntervalSeconds * 1000)
      .pipe(
        takeWhile(() => true) // Keep refreshing indefinitely
      )
      .subscribe(() => {
        this.loadAllPlayers()
      });
  }
  payPlayer(amount: IonInput, uuid: string){
    const data = new HttpParams()
      .set('amount', amount.value as number)
      .set('uuid', uuid as string);
    this.api.EconomyPayPlayer(data).subscribe(()=>{
      const message = `§bServerTap §e>>> §fYou get §e${amount.value} §f${environment.currency_name}`;
      const data = new HttpParams()
        .set('message', message as string)
        .set('playerUuid', uuid as string);
      this.api.sendMessageToPlayer(data).subscribe(()=>{
          this.loadAllPlayers()
      },(error)=> {
        console.log(error)
      })
    },(error)=>{
      console.log(error)
    })
  }
  debitPlayer(amount: IonInput, uuid: string){
    const data = new HttpParams()
      .set('amount', amount.value as number)
      .set('uuid', uuid as string);
    this.api.EconomyWidthdrawPlayer(data).subscribe(()=>{
      const message = `§bServerTap §e>>> §fYou have pay §e${amount.value} §f${environment.currency_name}`
      const data = new HttpParams()
        .set('message', message as string)
        .set('playerUuid', uuid as string);
      this.api.sendMessageToPlayer(data).subscribe(()=>{
        this.loadAllPlayers()
      },(error)=> {
        console.log(error)
      })
    },(error)=>{
      console.log(error)
    })
  }
  protected readonly environment = environment;
}
