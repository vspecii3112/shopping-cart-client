import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ShoppingCartService {

    constructor(private _http: Http) {}

    domain:string = 'http://localhost:3333';     // http://localhost:3333 , https://cstoreapi.herokuapp.com

    getCartItems() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/shopping_cart', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    getTotalQuantity() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/get_total_quantity', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    addItem(coinID: string, itemQty: number) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        let headers = new Headers({'Content-Type':'application/X-www-form-urlencoded'});
        let options = new RequestOptions({
            //params: myParams,
            headers: headers,
            withCredentials: true   //set to true to send cookie along with the request
        });
        let bodyString = 'itemQty=' + itemQty;
        return this._http.post(this.domain + '/add_to_cart/' + coinID, bodyString, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    reduceOneQuantity(coinID: string) {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/reduce_one/' + coinID, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    removeItem(coinID: string) {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/remove_all/' + coinID, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    cartCheckout() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/checkout', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    makeCharge(cardToken: string) {
        var headers = new Headers({'Content-Type':'application/X-www-form-urlencoded'});
        let options = new RequestOptions({
            headers: headers,
            withCredentials: true   //set to true to send cookie along with request
        });
        var token = 'stripeToken=' + cardToken;
        return this._http.post(this.domain + '/make_charge', token, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));

    }

    getPurchaseHistory() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get(this.domain + '/purchase_history', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    updateCart(updateCart: any) {
        let bodyString = JSON.stringify(updateCart);
        console.log(bodyString);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({
            withCredentials: true,  //set to true to send cookie along with request
            headers: headers
        });
        return this._http.post(this.domain + '/cart_update', bodyString, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }
    
}
