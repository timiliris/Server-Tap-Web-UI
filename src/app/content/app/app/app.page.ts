import { Component, OnInit } from '@angular/core';
import {NavMenuService} from "../../../services/nav/nav-menu.service";
import {ParticlesService} from "../../../services/particle/particles.service";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  constructor(public menuNav: NavMenuService, public particle: ParticlesService) { }
id='particleApp'
  ngOnInit() {
  }

  protected readonly environment = environment;
}
