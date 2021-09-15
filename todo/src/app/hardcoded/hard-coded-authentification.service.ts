import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthentificationService {

  constructor() { }


  authentificate(username: any, password: any){
    console.log('before' + this.isUSerLoggedIn);
    
    if(username==="Cosmen"&& password==="pass"){
      sessionStorage.setItem('authentificatedUser', username);
      console.log('after' + this.isUSerLoggedIn);
      return true;

  } return false;
}
isUSerLoggedIn(){
  let user= sessionStorage.getItem('authentificatedUser');
  return !(user===null);
}

}
