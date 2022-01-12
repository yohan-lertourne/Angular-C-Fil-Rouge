import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
        }
    )
};

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private http: HttpClient) { }

    getUsers() {
        let items = this.http.get('https://localhost:7027/api/Users', httpOptions);
        items.subscribe((elements: any) => {
            
        })
    }
}