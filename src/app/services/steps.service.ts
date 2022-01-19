import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StepsService {

    subject = new Subject<number>();

    constructor(private httpClient: HttpClient) { }

    getAPISteps(): Observable<Object> {
        return this.httpClient.get('https://localhost:7027/api/Steps');
    }

    getAPIStep(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Steps/${id}`);
    }

    getAPIChoice(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Choices/${id}`);
    }

    getAPITheme(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Themes/${id}`);
    }

    getAPIIcon(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Icons/${id}`);
    }

    getAPIUser(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Users/${id}`);
    }
}