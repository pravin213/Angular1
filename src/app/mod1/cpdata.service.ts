import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CpdataService {

  constructor(private http : HttpClient) { }
  getData(){
    this.http.get("./assets/data/profile.json").subscribe(data=>{
      console.log("service data"+data['name']);
    },
    error=>{
      console.log("error message",error);
    }
    );
    return this.http.get("./assets/data/profile.json");
  }
}
