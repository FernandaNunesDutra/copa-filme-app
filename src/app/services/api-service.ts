import { HttpClient, HttpHeaders } from '@angular/common/http';
import Config from "../config";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ApiService<T> {

    private URL_API = Config.baseURL;

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    // // POST
    // CreateBug(data): Observable<Bug> {
    //     return this.http.post<Bug>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
    //         .pipe(
    //             retry(1),
    //             catchError(this.errorHandl)
    //         )
    // }

    getAll(url): Observable<T> {
        return this.http.get<T>(`${this.URL_API}/${url}`)
            .pipe(
                retry(1),
                catchError(this.errorHandle)
            )
    }

    errorHandle(error) {

        const errorMessage = (error.error instanceof ErrorEvent) ? 
                                             error.error.message : 
                                             `Error Code: ${error.status}\nMessage: ${error.message}`;
        return throwError(errorMessage);
    }

}