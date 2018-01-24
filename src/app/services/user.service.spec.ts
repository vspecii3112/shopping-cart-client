import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('Checks User Authentication', () => {

    let _userService: UserService;
    let httpMock: HttpTestingController;

    let domain:string = 'http://localhost:3333';     // http://localhost:3333 , https://cstoreapi.herokuapp.com

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                UserService
            ]
        });

        _userService = TestBed.get(UserService);
        httpMock = TestBed.get(HttpTestingController);     
    });

    afterEach( () => {
        httpMock.verify();
    });

    it('authentication is false for user not logged in', () => {
        _userService.isLoggedIn().subscribe(res => {
            expect(res['authenticated']).toEqual(false);

        });

        const req = httpMock.expectOne(domain + '/user/isauthenticated');

        expect(req.request.method).toEqual('GET');

        req.flush({authenticated: false});
    });

});