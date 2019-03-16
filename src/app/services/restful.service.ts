import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable(@Injectable({
  providedIn: 'root',
}))

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
        return Observable.throw('api path not added.');
    }
    console.log('called api [' + url + ']');
    return http.get(url)
      .catch((error: Response) => Observable.throw(error || 'Server error'));
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
        return Observable.throw('api path not added.');
    }
    console.log('called api [' + url + ']');
    return http.delete(url)
      .catch((error: Response) => Observable.throw(error || 'Server error'));
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
        return Observable.throw('api path not added.');
    }
    console.log('called api [' + url + ']');
    return http.put(url, data)
      .catch((error: Response) => Observable.throw(error || 'Server error'));
  }

  api_POST(data, apiPath) {
    console.log('post data ', data);
    console.log('post apiPath ', apiPath);
    let url = environment.API_HOST;
    switch (apiPath) {
      case environment.API_LOGIN:
        url += environment.API_LOGIN;
        break;
      default:
        console.error('ERROR -- : @api_POST api path not added.');
        return Observable.throw('api path not added.');
    }
    console.log('called api [' + url + ']');
    return http.post(url, data)
      .catch((error: Response) => Observable.throw(error || 'Server error'));
  }

}
