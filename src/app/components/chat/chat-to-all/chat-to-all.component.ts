import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {ApiService} from "../../../services/api/api.service";
import {ToastService} from "../../../services/toast/toast.service";

@Component({
  selector: 'app-chat-to-all',
  templateUrl: './chat-to-all.component.html',
  styleUrls: ['./chat-to-all.component.scss'],
})
export class ChatToAllComponent  implements OnInit {
 message?: string;

  constructor(public api: ApiService, private toast : ToastService) { }

  ngOnInit() {}
  sendMessage() {
    if (this.message) {
      const data = new HttpParams()
        .set('message', this.message as string)

      this.api.sendMessageToAll(data.toString()).subscribe(() => {
        const pos = 'middle'
        const message= 'Message Send!'
        this.toast.SuccessToast(pos, message).then()
        console.log('message send');
      }, (error) => {
        const pos = 'middle'
        const message= `Error!${error.error}`
        this.toast.SuccessToast(pos, message).then()
        console.log(error);
      });
    }
  }
}
