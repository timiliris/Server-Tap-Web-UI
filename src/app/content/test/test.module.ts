import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';
import {NgParticlesModule} from "ng-particles";
import {AppPageModule} from "../app/app/app.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule,
    NgParticlesModule,
    AppPageModule
  ],
  declarations: [TestPage]
})
export class TestPageModule {}
