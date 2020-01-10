import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-list/hero-detail/hero-detail.component';
import {RouterModule} from '@angular/router';
import {HeroService} from './hero-service/hero.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [HeroService]
})
export class HeroModuleModule { }
