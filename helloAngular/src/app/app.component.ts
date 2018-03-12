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
  task = [];
  title = 'MEAN';
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getTasksFromService();
  }
  getTasksFromService(){
    let Observable = this._httpService.getTasks();
    Observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data.data;
    });
    this._httpService.getTasks();
  }
  getOneTaskFromService(){
    let Observable = this._httpService.getOneTask(id);
    Observable.subscribe(data => {
      console.log('Got our one task!', data);
      this.task = data.data;
    });
    this._httpService.getOneTask(id);
  }
}
