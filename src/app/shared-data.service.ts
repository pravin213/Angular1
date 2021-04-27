import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSource = new BehaviorSubject({name:'marnda'});
  currentData = this.dataSource.asObservable();
  constructor() { }
  changeData(data:any){
    this.dataSource.next(data);
  }
}
