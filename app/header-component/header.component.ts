import { Component, OnInit } from '@angular/core';
//import login = require('../globals/globals');   //trying to make a global variable

@Component({
  selector: 'app-header',
  templateUrl: 'app/header-component/header.component.html'
})

export class HeaderComponent implements OnInit{

  constructor(){

  }

  ngOnInit(){
    if(window.sessionStorage.getItem('auth_key')){
      // if user is logged in, it will set the user account dropdown items in the nav bar
      this.loggedIn = true;
      this.notLoggedIn = false;
      }
    else{
      // if user is not logged in, it will set the user account dropdown items in the nav bar
      this.notLoggedIn = true;
      this.loggedIn = false;
    }
  }
    loggedIn: boolean = false;
    notLoggedIn: boolean = true;

}
