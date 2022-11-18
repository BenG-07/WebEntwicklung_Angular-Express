import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Activity } from './models/activity-model.model';
import { QueryService } from './services/query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebEntwicklung_Angular-Express';
  
  constructor(private router: Router, private query: QueryService) {
    
  }

  public activities: Activity[] = [];

  async ngOnInit(): Promise<void> {
    const data = await this.query.getData();
    this.activities.push(data);
  }

  async handleButtonClick($event: MouseEvent) {
    this.activities.pop();
    const data = await this.query.getData();
    this.activities.push(data);
    this.router.navigateByUrl('', { skipLocationChange: true });
  }
}
