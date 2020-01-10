import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../../hero-module/hero-service/hero.service';
import {CrisisServiceService} from '../crisis-service/crisis-service.service';
import {Crisis} from '../crisis-model/crisis';

@Component({
  selector: 'app-crisis-list',
  template: `
    <div class="container">
      <h1>Crisis List</h1>
      <div class="row" >
        <div class="col-sm" >
          <div *ngFor="let crisis of crisisList">
            <a  [routerLink]="['/crisis', crisis.crisisID, crisis.crisisName]">
              {{crisis.crisisID}}
              {{crisis.crisisName}}
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
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crisisList: Array<Crisis>;

  constructor(private service: CrisisServiceService) { }

  ngOnInit() {
    this.crisisList = this.service.getAllCrisis();
  }

}
