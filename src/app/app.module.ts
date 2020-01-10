import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroModuleModule} from './hero-module/hero-module.module';
import {ErrorPageComponent} from './error-page-component/error-page-component.component';
import {HeroService} from './hero-module/hero-service/hero.service';
import {CrisisModuleModule} from './crisis-module/crisis-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroModuleModule,
    CrisisModuleModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
