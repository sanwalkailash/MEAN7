import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpResponse,HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable,EMPTY, throwError } from 'rxjs';
import { map, switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Injectable()

export class RestfulService {

  constructor(private http: HttpClient) {
  }

  api_GET(perameterjson, apiPath) {
    console.log('perameter json for get call is ', perameterjson);
    let url = environment.API_HOST;
    switch (apiPath) {
      case environment.API_HOST:
        url += environment.API_HOST + '?page=' + perameterjson.page + '&id=' + perameterjson.id;
        break;
      default:
        console.error('ERROR -- : @api_GET api path not added.');
        return throwError('api path not added.');
    }
    console.log('called api [' + url + ']');
    return this.http.get(url)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            // this.errorDialogService.openDialog(event);
          }
          return event;
        })
      )
      .pipe(catchError((error: HttpErrorResponse) => throwError(error || 'Server error')));
  }

  api_DELETE(data, apiPath) {
    console.log('api_DELETE data ', data);
    let url = environment.API_HOST;

    switch (apiPath) {
      case environment.API_HOST:
        url = environment.API_HOST + data._id;
        break;
      default:
        console.error('ERROR -- : @api_DELETE api path not added.');
        return throwError('api path not added.');
    }
    console.log('called api [' + url + ']');
    return this.http.delete(url)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            // this.errorDialogService.openDialog(event);
          }
          return event;
        })
      )
      .pipe(catchError((error: HttpErrorResponse) => throwError(error || 'Server error')));
  }

  api_PUT(data, apiPath) {
    console.log('put data ', data);
    let url = environment.API_HOST;

    switch (apiPath) {
      case environment.API_HOST:
        url = environment.API_HOST;
        break;
      default:
        console.error('ERROR -- : @api_PUT api path not added.');
        return throwError('api path not added.');
    }
    console.log('called api [' + url + ']');
    return this.http.put(url, data)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            // this.errorDialogService.openDialog(event);
          }
          return event;
        })
      )
      .pipe(catchError((error: HttpErrorResponse) => throwError(error || 'Server error')));
  }

  api_POST(data, apiPath) {
    console.log('post data ', data);
    console.log('post apiPath ', apiPath);
    let url = environment.API_HOST;
    switch (apiPath) {
      case environment.API_LOGIN:
        url += environment.API_LOGIN;
        break;
      case environment.API_REGISTER:
        url += environment.API_REGISTER;
        break;
      default:
        console.error('ERROR -- : @api_POST api path not added.');
        return throwError('api path not added.');
    }
    console.log('called api [' + url + ']');
    return this.http.post(url, data)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            // this.errorDialogService.openDialog(event);
          }
          return event;
        })
      )
      .pipe(catchError((error: HttpErrorResponse) => throwError(error || 'Server error')));
  }

}
