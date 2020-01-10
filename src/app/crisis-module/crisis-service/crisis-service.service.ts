import { Injectable } from '@angular/core';
import {Crisis} from '../crisis-model/crisis';

@Injectable({
  providedIn: 'root'
})
export class CrisisServiceService {

  crisisDB = [new Crisis('Hero A is on Fire', 1), new Crisis('HeroB is drowning', 2), new Crisis('Hero C is dead', 3)];

  constructor() { }

  getAllCrisis() {
    return this.crisisDB;
  }

  updateCrisis(crisisID: number, crisisName: string) {
    const updateIndex = this.crisisDB.findIndex( index => index.crisisID === crisisID);
    this.crisisDB[updateIndex].crisisName = crisisName;
    console.log(this.crisisDB);
    console.log('updateCrisis called');
  }
}
