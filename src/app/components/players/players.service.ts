import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PlayerInfos} from "../../shared/serverTap.interface";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  baseUrl: string = environment.api_url
  playerInfo?: PlayerInfos;
  apiKey: string = environment.api_key;
  constructor(private http: HttpClient) { }
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'key': `${this.apiKey}`
    });
  }
  getPlayersDetails(uuid: string){
    this.http.get<PlayerInfos>(`${this.baseUrl}v1/players/${uuid}`, { headers: this.createHeaders() }).subscribe((info: any) => {
      this.playerInfo = info as PlayerInfos
      console.log(this.playerInfo)
    })
  }

}
