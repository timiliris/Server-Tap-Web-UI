import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppPageRoutingModule } from './app-routing.module';

import { AppPage } from './app.page';
import {DashboardMainComponent} from "../../../components/dashboard/dashboard-main/dashboard-main.component";
import {PlayersMainComponent} from "../../../components/players/players-main/players-main.component";
import {ServerMainComponent} from "../../../components/server/server-main/server-main.component";
import {PluginsMainComponent} from "../../../components/plugins/plugins-main/plugins-main.component";
import {ChatMainComponent} from "../../../components/chat/chat-main/chat-main.component";
import {EconomyMainComponent} from "../../../components/economy/economy-main/economy-main.component";
import {AdvancementMainComponent} from "../../../components/advancement/advancement-main/advancement-main.component";
import {PlaceholderMainComponent} from "../../../components/placeholder/placeholder-main/placeholder-main.component";
import {NgParticlesModule} from "ng-particles";
import {AppModule} from "../../../app.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppPageRoutingModule,
    NgParticlesModule,
    AppModule
  ],
  exports: [
    DashboardMainComponent,
    PlayersMainComponent,
    ServerMainComponent,
    PluginsMainComponent,
    ChatMainComponent,
    EconomyMainComponent,
    PlaceholderMainComponent,
    AdvancementMainComponent
  ],
  declarations: [AppPage, DashboardMainComponent, PlayersMainComponent, ServerMainComponent, PluginsMainComponent, ChatMainComponent, EconomyMainComponent, AdvancementMainComponent, PlaceholderMainComponent]
})
export class AppPageModule {}
