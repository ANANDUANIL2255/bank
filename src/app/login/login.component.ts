import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

data="happy banking with us"
data2="enter account number"

acno:any
psw:any

constructor(private rout:Router){}
login(){
  
  // console.log(this.acno);
  // console.log(this.psw);
  
  this.rout.navigateByUrl("home")
  
  // alert("login clicked")
}
// acnoChange(event:any){
//   console.log(event.target.value);
  
// }
// passChange(event:any){
//   console.log(event.target.value);
  
// }
}
