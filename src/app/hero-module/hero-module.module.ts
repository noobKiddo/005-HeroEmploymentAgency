import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [
    CommonModule
  ]
})
export class HeroModuleModule { }
