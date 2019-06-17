import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class GetDataService {
    constructor(private httpClient: HttpClient) {}
    apiAddress = 'https://jsonplaceholder.typicode.com';
    getContent() {
        return this.httpClient.get<any>(`${this.apiAddress}/albums/1/photos?_limit=10`)
        .pipe(map((res) => {
            return res;
        }));
    }
}
