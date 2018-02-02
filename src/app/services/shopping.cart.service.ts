import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Domain } from '../objects/domain.class';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ShoppingCartService {

    constructor(private _http: HttpClient, private domain: Domain) {}

    getCartItems() {
        return this._http.get(this.domain.url + '/shopping_cart', {withCredentials: true})
            .catch(error => Observable.throw(error.json()));
    }

    getTotalQuantity() {
        return this._http.get(this.domain.url + '/get_total_quantity', {withCredentials: true})
            .catch(error => Observable.throw(error.json()));
    }

    addItem(coinID: string, itemQty: number) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        let headers = new HttpHeaders({'Content-Type':'application/X-www-form-urlencoded'});
        let bodyString = 'itemQty=' + itemQty;
        return this._http.post(this.domain.url + '/add_to_cart/' + coinID, bodyString, {headers: headers, withCredentials: true})
            .catch(error => Observable.throw(error.json()));
    }

    reduceOneQuantity(coinID: string) {
        return this._http.get(this.domain.url + '/reduce_one/' + coinID, {withCredentials: true})
            .catch(error => Observable.throw(error.json()));
    }

    removeItem(coinID: string) {
        return this._http.get(this.domain.url + '/remove_all/' + coinID, {withCredentials: true})
            .catch(error => Observable.throw(error.json()));
    }

    cartCheckout() {
        return this._http.get(this.domain.url + '/checkout', {withCredentials: true})
            .catch(error => Observable.throw(error.json()));
    }

    makeCharge(cardToken: string) {
        var headers = new HttpHeaders({'Content-Type':'application/X-www-form-urlencoded'});
        var token = 'stripeToken=' + cardToken;
        return this._http.post(this.domain.url + '/make_charge', token, {headers: headers, withCredentials: true})
            .catch(error => Observable.throw(error.json()));
    }

    updateCart(updateCart: any) {
        let bodyString = JSON.stringify(updateCart);
        //console.log(bodyString);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this.domain.url + '/cart_update', bodyString, {headers: headers, withCredentials: true})
            .catch(error => Observable.throw(error.json()));
    }  
}
