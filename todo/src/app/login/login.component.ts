import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HardCodedAuthentificationService } from '../hardcoded/hard-coded-authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username ='cosmin';
  password ='';
  errorMessage='invalid credentials';
  invalidLogin= false;

  constructor(private router: Router,
   private hardCodedService: HardCodedAuthentificationService) { }

  ngOnInit(): void {
  }
  handleLogin(){
    // if(this.username==="Cosmen"&& this.password==="pass"){
      if(this.hardCodedService.authentificate(this.username,this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
  }

}
