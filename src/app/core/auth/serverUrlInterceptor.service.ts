
import { Injectable } from '@angular/core';
import {
    InterceptorService,
    Interceptor,
    InterceptedRequest,
    InterceptedResponse
} from 'ng2-interceptors';
import {
    XHRBackend,
    RequestOptions,
    RequestMethod
} from '@angular/http';
import { AuthService } from './auth.service';
import { Http } from '@angular/http';
import { FormatService } from '../misc/format.service';

declare const API_URL: string;

@Injectable()
export class ServerURLInterceptor implements Interceptor {
    constructor(
      public http: Http,
      public formatService: FormatService
    ) {

    }
    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        const url = `${API_URL}`;
        request.url = url + request.url;
        request.options.url = url + request.options.url;
        if (request.options.method === RequestMethod.Post) {
        request.options.headers.set('Content-Type', 'application/json');
        }
        return request;
    }
    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
      // Do whatever with response: get info or edit it

      return response;
      /*
        You can return:
          - Response: The modified response
          - Nothing: For convenience: It's just like returning the response
      */
    }
}
