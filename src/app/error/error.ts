import { ErrorHandler } from "@angular/core";

export class Myerror implements ErrorHandler {
    handleError(error: any): void {
        console.log("Custom error handler: ", error);
        //console.log("Custom error handler: ");
    }
}
