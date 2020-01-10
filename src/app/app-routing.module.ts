import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroModuleModule} from './hero-module/hero-module.module';
import {HeroDetailComponent} from './hero-module/hero-list/hero-detail/hero-detail.component';
import {HeroListComponent} from './hero-module/hero-list/hero-list.component';
import {ErrorPageComponent} from './error-page-component/error-page-component.component';
import {CrisisListComponent} from './crisis-module/crisis-list/crisis-list.component';
import {CrisisDetailComponent} from './crisis-module/crisis-list/crisis-detail/crisis-detail.component';
import {DeactivateGuard} from './deactivate.guard';


const routes: Routes = [
  {path: 'heroes', component: HeroListComponent, children: [
      {path: ':id/:name', component: HeroDetailComponent}
    ]},
  { path: 'crisis', component: CrisisListComponent, children: [
      {path: ':id/:name', component: CrisisDetailComponent, canDeactivate: [DeactivateGuard]}
    ]},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
