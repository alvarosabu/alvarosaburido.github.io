import { NgModule } from '@angular/core';
import {
    InterceptorService,
    Interceptor,
    InterceptedRequest,
    InterceptedResponse
} from 'ng2-interceptors';
import {
    Http,
    HttpModule,
    XHRBackend,
    RequestOptions
} from '@angular/http';
import { ServerURLInterceptor } from './serverURLInterceptor.service';

export function interceptorFactory(
    xhrBackend: XHRBackend,
    requestOptions: RequestOptions,
    serverURLInterceptor: ServerURLInterceptor,

) { // Add it here
  const service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(serverURLInterceptor);
  return service;
}

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        ServerURLInterceptor,
        {
          provide: InterceptorService,
          useFactory: interceptorFactory,
          deps: [
            XHRBackend,
            RequestOptions,
            ServerURLInterceptor
          ]
        }
    ],
})
export class AuthModule { }
