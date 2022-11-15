import { Injectable } from '@angular/core';
import { Activity } from '../models/activity-model.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor() { }

  async getData(): Promise<Activity> {
    return await fetch('https://www.boredapi.com/api/activity')
                .then(res => res.json())
                .then(res => {
                        return res as Activity
                });
  }
}
