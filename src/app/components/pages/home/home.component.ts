import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Activity } from '../../.././models/activity-model.model'
import { QueryService } from '../../.././services/query.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() {

  }

  public activities: Activity[] = [];
  private query: QueryService = new QueryService();

  async ngOnInit(): Promise<void> {
    const data = await this.query.getData();
    this.activities.push(data);
  }

  async handleButtonClick() {
    this.activities.pop();
    const data = await this.query.getData();
    this.activities.push(data);
  }
}
