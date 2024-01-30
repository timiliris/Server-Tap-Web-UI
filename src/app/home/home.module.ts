import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {NgParticlesModule} from "ng-particles";
import {DashboardMainComponent} from "../components/dashboard/dashboard-main/dashboard-main.component";
import {
  DashboardServerPanelComponent
} from "../components/dashboard/dashboard-server-panel/dashboard-server-panel.component";
import {ServerMainComponent} from "../components/server/server-main/server-main.component";
import {PlayersMainComponent} from "../components/players/players-main/players-main.component";
import {PlayersListComponent} from "../components/players/players-list/players-list.component";
import {PlayersDetailsComponent} from "../components/players/players-details/players-details.component";
import {ChatMainComponent} from "../components/chat/chat-main/chat-main.component";
import {ChatToAllComponent} from "../components/chat/chat-to-all/chat-to-all.component";
import {ChatToPlayerComponent} from "../components/chat/chat-to-player/chat-to-player.component";
import {
  PlayersOnlineDisplayComponent
} from "../components/players/players-online-display/players-online-display.component";
import {EconomyMainComponent} from "../components/economy/economy-main/economy-main.component";
import {EconomyInfoComponent} from "../components/economy/economy-info/economy-info.component";
import {EconomyPlayersComponent} from "../components/economy/economy-players/economy-players.component";
import {CommandMainComponent} from "../components/command/command-main/command-main.component";
import {CommandFreeActionComponent} from "../components/command/command-free-action/command-free-action.component";
import {CommandFastActionComponent} from "../components/command/command-fast-action/command-fast-action.component";
import {CommandConsoleComponent} from "../components/command/command-console/command-console.component";
import {AdvancementMainComponent} from "../components/advancement/advancement-main/advancement-main.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        NgParticlesModule
    ],
  declarations: [HomePage, DashboardMainComponent, DashboardServerPanelComponent, ServerMainComponent, PlayersMainComponent, PlayersListComponent, PlayersDetailsComponent, ChatMainComponent, ChatToAllComponent, ChatToPlayerComponent, PlayersOnlineDisplayComponent, EconomyMainComponent, EconomyInfoComponent, EconomyPlayersComponent, CommandMainComponent, CommandFreeActionComponent, CommandFastActionComponent, CommandConsoleComponent, AdvancementMainComponent]
})
export class HomePageModule {}
