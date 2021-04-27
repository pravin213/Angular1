import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex3';
  formGroup:FormGroup;
  name:string
  sirname:string
  constructor(private formBuild:FormBuilder){
    
    this.formGroup = formBuild.group({
      fname:['',[Validators.required,Validators.maxLength(4)]],
      fsirname:['',[Validators.required,Validators.maxLength(4)]]
    });
  }
  postData(){
    console.log(this.formGroup.controls.fname.value);
  }
}
