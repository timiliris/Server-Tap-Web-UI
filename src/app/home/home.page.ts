import { Component } from '@angular/core';
import {NavMenuService} from "../services/nav/nav-menu.service";
import {ParticlesService} from "../services/particle/particles.service";
import {environment} from "../../environments/environment.prod";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 id="ParticlesHome"
  constructor(public menuNav: NavMenuService, public particle: ParticlesService, public auth: AuthService) {}

  protected readonly environment = environment;
}
