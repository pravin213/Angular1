import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedDataService} from '../../shared-data.service';
import {CpdataService} from '../cpdata.service';
 @Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {
  data:any;
  httpData:any;
  constructor(private router:Router, private shareData: SharedDataService, private cpData:CpdataService ) { }

  ngOnInit() {
    this.shareData.currentData.subscribe(data=>this.data=data);
    
    this.cpData.getData().subscribe(data=>this.httpData=data);
    console.log("http data",this.httpData);
  }
  changeName(){
    this.shareData.changeData({name:"Dipak"});
    this.router.navigate(["/mod/ex"])
  }

}
