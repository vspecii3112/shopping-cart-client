import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoadCoinInfoService {

    constructor(private _http: Http) {}

    domain:string = 'http://localhost:3333';     // http://localhost:3333 , https://cstoreapi.herokuapp.com

    getCoins() {
        return this._http.get(this.domain + '/get_coin_info')
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

}
