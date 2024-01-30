import { Component } from '@angular/core';
import {NavMenuService} from "./services/nav/nav-menu.service";
import {environment} from "../environments/environment.prod";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(public navMenu: NavMenuService) {}

  protected readonly environment = environment;
}
