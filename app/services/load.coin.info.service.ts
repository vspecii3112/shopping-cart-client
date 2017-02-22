import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';


@Injectable()
export class LoadCoinInfoService {

    constructor(private _http: Http) {}

    getCoins() {
        return this._http.get('http://localhost:3333/get_coin_info')
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

}