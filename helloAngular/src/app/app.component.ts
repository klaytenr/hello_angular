import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app';
  tasks = [];
  title = 'MEAN';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    let Observable = this._httpService.getTasks();
    Observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data.data;
    });
    this.getTasksFromService();
  }
  getTasksFromService(){
    this._httpService.getTasks();
  }
}
