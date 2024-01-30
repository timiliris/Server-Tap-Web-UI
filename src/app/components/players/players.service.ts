import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {PlayerInfos} from "../../shared/serverTap.interface";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  baseUrl: string = environment.api_url
  playerInfo?: PlayerInfos;

  constructor(private http: HttpClient) { }

  getPlayersDetails(uuid: string){
    this.http.get<PlayerInfos>(`${this.baseUrl}v1/players/${uuid}`).subscribe((info: any) => {
      this.playerInfo = info as PlayerInfos
      console.log(this.playerInfo)
    })
  }

}
