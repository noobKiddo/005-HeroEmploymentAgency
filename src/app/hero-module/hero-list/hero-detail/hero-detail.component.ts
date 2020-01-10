import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Hero} from '../../hero-model/hero';
import {HeroService} from '../../hero-service/hero.service';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div class="container">
        <h3>{{hero.heroID}}</h3>
        <input #teemo value="{{hero.heroName}}" (keyup)="updateValue(teemo.value)"/>
    </div>
  `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero = new Hero();

  constructor(private route: ActivatedRoute, private service: HeroService) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(res => {
        this.hero.heroID = +res.get('id');
        this.hero.heroName = res.get('name');
      });
  }

  updateValue(value: string) {
    // console.log(this.hero.heroID);
    console.log(value);
    this.service.updateHero(this.hero.heroID, value);
  }
}
