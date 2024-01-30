import { Component, OnInit } from '@angular/core';
import {ServerInfo} from "../../../shared/serverTap.interface";
import {ApiService} from "../../../services/api/api.service";
import {environment} from "../../../../environments/environment.prod";
import {interval, Subscription, takeWhile} from "rxjs";

@Component({
  selector: 'app-dashboard-server-panel',
  templateUrl: './dashboard-server-panel.component.html',
  styleUrls: ['./dashboard-server-panel.component.scss'],
})
export class DashboardServerPanelComponent  implements OnInit {
  serverInfo?: ServerInfo;
  refreshSubscription?: Subscription;
  constructor(private api: ApiService) {
    this.getServerInfo()
  }

  ngOnInit() {
    this.getServerInfo()
    this.startRefreshTimer();
  }
  getServerInfo(){
    this.api.getServerInfo().subscribe((info: ServerInfo) =>{
      this.serverInfo = info
    }, (error) =>{
      this.serverInfo = <ServerInfo>{};
      console.log(error)
    })
  }
  formatMemory(memoryInBytes: number): string {
    const KB = memoryInBytes / 1024;
    const MB = KB / 1024;
    const GB = MB / 1024;

    if (GB >= 1) {
      return GB.toFixed(2) + ' GB';
    } else if (MB >= 1) {
      return MB.toFixed(2) + ' MB';
    } else {
      return KB.toFixed(2) + ' KB';
    }
  }
  formatDuration(seconds: number): string {
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = seconds % 60;

    let result = '';
    if (days > 0) {
      result += days + ' j' + (days > 1 ? '' : ' ');
    }
    if (hours > 0) {
      result += hours + ' h' + (hours > 1 ? ' ' : ' ');
    }
    if (minutes > 0) {
      result += minutes + ' m' + (minutes > 1 ? ' ' : ' ');
    }
    if (remainingSeconds > 0) {
      result += remainingSeconds + ' s' + (remainingSeconds > 1 ? '' : '');
    }

    return result;
  }
  startRefreshTimer() {
    const refreshIntervalSeconds = environment.refresh_rate || 60; // Default to 60 seconds if not specified in environment
    this.refreshSubscription = interval(refreshIntervalSeconds * 1000)
      .pipe(
        takeWhile(() => true) // Keep refreshing indefinitely
      )
      .subscribe(() => {
        this.getServerInfo();
      });
  }
  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  protected readonly environment = environment;
}
