import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

data="happy banking with us"
data2="enter account number"

login(a:any,b:any){
  console.log(a.value);
  console.log(b.value);
  
  
  // alert("login clicked")
}
// acnoChange(event:any){
//   console.log(event.target.value);
  
// }
// passChange(event:any){
//   console.log(event.target.value);
  
// }
}
