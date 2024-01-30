import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {ToastService} from "../../../services/toast/toast.service";
import {IonInput} from "@ionic/angular";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-command-free-action',
  templateUrl: './command-free-action.component.html',
  styleUrls: ['./command-free-action.component.scss'],
})
export class CommandFreeActionComponent  implements OnInit {
   result?: Object;

  constructor(public api: ApiService, private toast:ToastService) { }

  ngOnInit() {}

  sendCommand(command: IonInput){
    const data = new HttpParams()
      .set('command', command.value as string)
      .set('time', 15 as number);
    this.api.SendCommand(data).subscribe((res) =>{
      this.result = res
      console.log(res)
    }, (error)=>{
      console.log(error)
    })
  }
}
