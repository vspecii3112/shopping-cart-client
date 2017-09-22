"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var shopping_cart_service_1 = require("../services/shopping.cart.service");
var CheckoutComponent = (function () {
    function CheckoutComponent(shoppingcart, _router, _fb) {
        this.shoppingcart = shoppingcart;
        this._router = _router;
        this._fb = _fb;
        this.totalCartPrice = 0;
        this.total_qty = 0; //stores the number of items in the variable and this number is shown beside the shopping cart link
        this.checkoutOrderInfo = {
            name: '',
            addressLine1: '',
            addressLine2: '',
            addressCity: '',
            addressState: '',
            addressZip: '',
            addressCountry: ''
        };
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.checkCart();
        this.initCard();
        this.shoppingCartCheckoutForm = this._fb.group({
            'checkoutName': [''],
            'checkoutAddress': [''],
            'checkoutCountry': ['']
        });
    };
    CheckoutComponent.prototype.checkCart = function () {
        var _this = this;
        this.shoppingcart.cartCheckout()
            .subscribe(function (data) {
            if (data.redirect == 'home') {
                _this._router.navigate(['/home']);
                console.log('no items in cart');
            }
            else if (data.redirect == 'login') {
                _this._router.navigate(['/login']);
            }
            else {
                _this.totalCartPrice = data.totalPrice;
            }
            _this.total_qty = data.totalQuantity;
        }, function (err) { return console.log(err); }, function () { return console.log('checkout done'); });
    };
    CheckoutComponent.prototype.initCard = function () {
        this.stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
        this.elements = this.stripe.elements();
        this.cardNumber = this.elements.create('cardNumber');
        this.cardExpiry = this.elements.create('cardExpiry');
        this.cardCvc = this.elements.create('cardCvc');
        this.postalCode = this.elements.create('postalCode');
        this.cardNumber.mount('#cardNumber-element');
        this.cardExpiry.mount('#cardExpiry-element');
        this.cardCvc.mount('#cardCvc-element');
        this.postalCode.mount('#postalCode-element');
    };
    CheckoutComponent.prototype.stripeTokenHandler = function (token) {
        var _this = this;
        this.shoppingcart.makeCharge(token.id)
            .subscribe(function (data) {
            if (data.success) {
                _this._router.navigate(['/home']);
                console.log("success charge");
            }
        }, function (err) {
            // if there is no cart session, it will redirect back to the home page
            if (err.msg == 'cart session does not exist') {
                console.log(err.msg);
                _this._router.navigate(['/home']);
            }
            else {
                console.log(err.msg); //error message if theres a error in charging
            }
        }, function () { console.log('Checkout complete'); });
    };
    CheckoutComponent.prototype.createToken = function () {
        var _this = this;
        this.stripe.createToken(this.cardNumber, {
            name: this.checkoutOrderInfo.name,
            address_line1: this.checkoutOrderInfo.addressLine1,
            address_line2: this.checkoutOrderInfo.addressLine2,
            address_city: this.checkoutOrderInfo.addressCity,
            address_state: this.checkoutOrderInfo.addressState,
            address_zip: this.checkoutOrderInfo.addressZip,
            address_country: this.checkoutOrderInfo.addressCountry
        })
            .then(function (result) {
            if (result.error) {
                console.log(result.error.message);
            }
            else {
                _this.stripeTokenHandler(result.token);
            }
        });
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/checkout-component/checkout.component.html'
    }),
    __metadata("design:paramtypes", [shopping_cart_service_1.ShoppingCartService, router_1.Router, forms_1.FormBuilder])
], CheckoutComponent);
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map