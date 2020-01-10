import { Injectable } from '@angular/core';
import {Hero} from '../hero-model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroDB = [new Hero('Jason', 1), new Hero('Super Girl', 2), new Hero('Superman', 3), new Hero('The Flash', 4)];

  constructor() { }

  getAllHero() {
    return this.heroDB;
  }

  updateHero(heroID: number, heroName: string) {
    const updateIndex = this.heroDB.findIndex( index => index.heroID === heroID);
    this.heroDB[updateIndex].heroName = heroName;
    console.log(this.heroDB);
  }
}
