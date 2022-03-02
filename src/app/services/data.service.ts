import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {



    constructor(@Inject('url') private url: string, private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url)
            .pipe(
                catchError(this.handleError)
            )
    }

    create(resource: any) {
        return this.http
            .post<any>(this.url, JSON.stringify(resource))
            .pipe(
                catchError(this.handleError)

            )

    }

    update(resource: any) {
        return this.http.put(this.url + '/' + resource.id, resource)
            .pipe(
                catchError(this.handleError)
            )
    }

    delete(id: number) {
        return this.http.delete(this.url + '/' + id)
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(error: Response) {
        console.log('Error management is happeneing here.....')
        if (error.status === 404) {
            return throwError(new NotFoundError())
        }

        if (error.status === 400) {
            return throwError(new BadInput());
        }

        else {
            return throwError(new AppError(error))
        }

    }


}
