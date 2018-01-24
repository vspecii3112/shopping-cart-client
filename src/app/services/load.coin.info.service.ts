import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Domain } from '../objects/domain.class';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoadCoinInfoService {

    constructor(private _http: HttpClient, private domain: Domain) {}

    getCoins() {
        return this._http.get(this.domain.url + '/get_coin_info')
            .catch(error => Observable.throw(error.json()));
    }
}
