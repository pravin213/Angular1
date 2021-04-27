import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod1-routing.module';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';


@NgModule({
  declarations: [Ex1Component, Ex2Component, Ex3Component],
  imports: [
    CommonModule,
    Mod1RoutingModule
  ]
})
export class Mod1Module { }
