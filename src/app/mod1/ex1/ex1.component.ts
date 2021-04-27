import { Component, OnInit } from '@angular/core';

import { Subscriber, timer, of, Observable, from } from 'rxjs';
import {Router} from '@angular/router';
import {SharedDataService} from '../../shared-data.service';
const myObservable = of('apple','orange','mango');
const myObserver = {
  next:(x:string)=>console.log("next value",x),
  error:(err)=>console.log("error",err),
  complete:()=>console.log("complete notification")
} 
@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {
  
   data1 : any;
  constructor(private router:Router, private shareData:SharedDataService) { 
    shareData.currentData.subscribe(data=>this.data1=data);
    myObservable.subscribe(myObserver);
    function seqSubscriber(observer) {
      observer.next("kaka")
      observer.next('mama')
      observer.complete()
      return {unsubscribe(){}};
    }
    let sequance = new Observable(seqSubscriber);
    sequance.subscribe({
      next(msg){console.log(msg)},
      complete(){console.log("complited")}
    })
    
  }
  
  ngOnInit() {

    

     
    // let mysub =  timer(1000,1000);
    // //mysub.next(1);
    // console.log("weldone");
    // let data = mysub.subscribe(x=>{
    //   console.log("Subject",x);
    //   return x;
    // })
    // setTimeout(() => { data.unsubscribe(); }, 10000);
    //console.log("data",data);
  }

  changeName(){
    
   // alert("name changed Sucess");
    this.shareData.changeData({name:"Pravin"});
    this.router.navigate(["/mod/ex1"])
  }

}
