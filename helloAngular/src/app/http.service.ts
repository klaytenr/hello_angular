import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getOneTask("5aa4423196235656c7bf83d3");
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }
  getOneTask(id){
    let temp = this._http.get('/tasks/'+id);
    temp.subscribe(data => console.log('Got our one task!', data));
  }

}