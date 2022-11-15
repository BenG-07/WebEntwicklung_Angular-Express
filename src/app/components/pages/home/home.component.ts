import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Activity } from '../../../models/activity-model.model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: CardModule }])],
  exports: [RouterModule]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
