import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseForm= new FormGroup(
    {
      'USN':new FormControl('',[Validators.required]),
      'Password':new FormControl('',[Validators.required]),
    }
  ) 
  constructor(private router:Router){

  }
  ngOnInit(): void {
    
       
    }
  submit(page:any){
    if(!this.baseForm.get('USN')?.value || !this.baseForm.get('Password')?.value){
      alert("Please enter usn and password")
    }
    else{
      console.log(this.baseForm.value)
      this.router.navigate([`${page}`],{queryParams:{data:this.baseForm.get('USN')?.value}});
    }   
  }
  

}
