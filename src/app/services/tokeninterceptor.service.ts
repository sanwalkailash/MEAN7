import {Injectable} from '@angular/core';
import {ErrordialogService} from '../errordialog/errordialog.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class TokeninterceptorService implements HttpInterceptor {

  constructor(public errorDialogService: ErrordialogService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }

    request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    request = request.clone({headers: request.headers.set('appname', 'Angular7')});
    request = request.clone({headers: request.headers.set('portalname', 'remittance7')});

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          // this.errorDialogService.openDialog(event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason: error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        this.errorDialogService.openDialog(data);
        return Observable.throw(error);
      }));
  }
}
