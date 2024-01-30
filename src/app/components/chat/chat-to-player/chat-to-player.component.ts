import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {PlayerInfos} from "../../../shared/serverTap.interface";
import {HttpParams} from "@angular/common/http";
import {ToastService} from "../../../services/toast/toast.service";

@Component({
  selector: 'app-chat-to-player',
  templateUrl: './chat-to-player.component.html',
  styleUrls: ['./chat-to-player.component.scss'],
})
export class ChatToPlayerComponent  implements OnInit {
  OnlinePlayers?: PlayerInfos[];
  message: any;
  uuid: any;
  selectedPlayer?: string;
  selectPlayer(player: any) {
    this.selectedPlayer = player.uuid;
    console.log(this.selectedPlayer)
  }

  constructor(private api: ApiService, private toast:ToastService) { }

  ngOnInit() {
    this.getPlayerOnline()
  }

  sendMessage() {
    console.log(this.message, this.selectedPlayer)
    if (this.message && this.selectedPlayer) {
      const data = new HttpParams()
        .set('message', this.message as string)
        .set('playerUuid', this.selectedPlayer as string);

      this.api.sendMessageToPlayer(data.toString()).subscribe(() => {
        const pos = 'middle'
        const message= 'Message send to the Player!'
        this.toast.SuccessToast(pos, message).then()
        console.log('message send');
      }, (error) => {
        const pos = 'middle'
        const message= `Error when sending the message!${error.error}`
        this.toast.SuccessToast(pos, message).then()
        console.log(error);
      });
    }
  }
  getPlayerOnline(){
    this.api.getOnlinePlayers().subscribe((players: PlayerInfos[])=> {
      this.OnlinePlayers = players
    })
  }

}
