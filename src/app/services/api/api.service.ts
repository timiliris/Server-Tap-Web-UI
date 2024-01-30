import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {ServerInfo} from "../../shared/serverTap.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = environment.api_url
  constructor(public http: HttpClient) {

  }
  getServerInfo(){
   return this.http.get<ServerInfo>(`${this.baseUrl}v1/server`)
  }

}
