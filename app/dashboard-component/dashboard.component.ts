import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header-component/header.component';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: 'app/dashboard-component/dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  constructor(private _router:Router) {

  }

  ngOnInit(){

  }

  logout() {
    window.sessionStorage.removeItem('auth_key');
    this._router.navigate(['/login']);
  }

  getCoins() {

  }

}
