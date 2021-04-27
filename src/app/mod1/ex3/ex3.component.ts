import { Component, OnInit } from '@angular/core';
import {Observable,timer, from,Subject, fromEvent} from 'rxjs';
@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {
  Ctime:any;
  constructor() { }

  ngOnInit() {
    var obr = new Observable((Observer)=>{
        Observer.next("Hi this is pravin");
        Observer.next("this is dipak");
        // setInterval(()=>{
        //   Observer.next("chamtkar")
        // },1000);
        //Observer.complete("complete");
        //Observer.error("this is error");
    })

    obr.subscribe(data=>{
      console.log(data);
    },
      error=>{console.log("Error Acuure")}
    )
    // var game = timer(1000,1000);
    // game.subscribe(x=>{
    //   this.Ctime = new Date();
    //   console.log("message",x); 
    // })
    // var e1 = document.getElementById('custom-element')
    // var mouseMove = fromEvent(e1,'mousemove')
    // mouseMove.subscribe((e:MouseEvent)=>{
    //   console.log(`Coordnitaes of mouse pointer: ${e.clientX} * ${e.clientY}`);
    // })

  }



}
