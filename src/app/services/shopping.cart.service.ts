import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ShoppingCartService {

    constructor(private _http: Http) {}

    getCartItems() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/shopping_cart', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    getTotalQuantity() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/get_total_quantity', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    addItem(coinID: string) {
        //let myParams = new URLSearchParams();
        //myParams.set('id', coinID);
        let options = new RequestOptions({
            //params: myParams,
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/add_to_cart/' + coinID, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    reduceOneQuantity(coinID: string) {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/reduce_one/' + coinID, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    removeItem(coinID: string) {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/remove_all/' + coinID, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }

    cartCheckout() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/checkout', options)
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
        return this._http.post('http://localhost:3333/make_charge', token, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));

    }

    getPurchaseHistory() {
        let options = new RequestOptions({
            withCredentials: true   //set to true to send cookie along with the request
        });
        return this._http.get('http://localhost:3333/purchase_history', options)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json()));
    }
}