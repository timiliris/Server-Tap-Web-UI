import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";
import {ParticlesService} from "../services/particle/particles.service";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public auth: AuthService, public particle: ParticlesService) { }

  ngOnInit() {
  }

  protected readonly environment = environment;
}
