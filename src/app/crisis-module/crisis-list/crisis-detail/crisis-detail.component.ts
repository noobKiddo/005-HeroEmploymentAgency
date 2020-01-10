import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CrisisServiceService} from '../../crisis-service/crisis-service.service';
import {Crisis} from '../../crisis-model/crisis';
import {IDeactivateComponent} from '../../../deactivate.guard';

@Component({
  selector: 'app-crisis-detail',
  template: `
    <div class="container">
      <h3>{{crisis.crisisID}}</h3>
      <input [(ngModel)]="crisisName"/>
      <button (click)="updateValue()">Save</button>
      <button (click)="discardChanges()">Cancel</button>
    </div>
  `,
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit, IDeactivateComponent{
  constructor(private router: Router, private route: ActivatedRoute, private service: CrisisServiceService) { }
  crisis = new Crisis();
  crisisName: string;

  canExit(inputBoolean?: boolean) {
    console.log(inputBoolean)
    if (inputBoolean) {
      return inputBoolean;
    } else {
      if (confirm('Do you wish to Please confirm')) {
        return true;
      } else {
        return false;
      }
    }

  }
  ngOnInit() {
    this.route.paramMap
      .subscribe(res => {
        this.crisis.crisisID = +res.get('id');
        this.crisis.crisisName = res.get('name');
        this.crisisName = this.crisis.crisisName;
      });
  }

  updateValue() {
    this.service.updateCrisis(this.crisis.crisisID, this.crisisName);
    this.router.navigate(['/crisis']);
    this.canExit(true);


  }

  discardChanges() {
    console.log('discard changes called');

    this.router.navigate(['/crisis']);
  }


}
