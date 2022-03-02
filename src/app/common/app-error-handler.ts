import { ErrorHandler } from "@angular/core";


export class AppErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        alert('Global Error Handler:An unexpected error have occured');
        console.log(error)
    }

}