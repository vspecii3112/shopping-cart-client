import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeaderComponent } from '../header-component/header.component';

@Component({
  templateUrl: 'app/signup-component/signup.success.component.html'
})

export class SignupSuccessComponent {

  constructor (private _router: Router, private route: ActivatedRoute) {

  }
}
