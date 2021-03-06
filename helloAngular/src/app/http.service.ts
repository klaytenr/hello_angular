import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getOneTask("5aa4423196235656c7bf83d3");
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  getOneTask(id){
    return this._http.get('/tasks/'+id);
  }

}