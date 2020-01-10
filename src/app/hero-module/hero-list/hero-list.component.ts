import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero-service/hero.service';
import {Hero} from '../hero-model/hero';

@Component({
  selector: 'app-hero-list',
  template: `
    <div class="container">
        <h1>Hero List</h1>
        <div class="row" >
            <div class="col-sm" >
                <div *ngFor="let hero of heroList">
                  <a  [routerLink]="['/heroes', hero.heroID, hero.heroName]">
                    {{hero.heroID}}
                    {{hero.heroName}}
                    <br>
                  </a>
                </div>
            </div>
            <div class="col-sm">
              <router-outlet></router-outlet>
            </div>
        </div>

    </div>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroList: Array<Hero>;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroList = this.heroService.getAllHero();
  }

}
