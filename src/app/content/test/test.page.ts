import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {ParticlesService} from "../../services/particle/particles.service";
import {NavMenuService} from "../../services/nav/nav-menu.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  id='11651'
  constructor(public particle: ParticlesService, public menuNav: NavMenuService) { }

  ngOnInit() {
  }

  protected readonly environment = environment;
}
