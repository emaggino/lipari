import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class GenericInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    debugger;
    const localToken = localStorage.getItem('accessToken');
    req = req.clone({
      headers: req.headers.set('Authorization', 'bearer ' + localToken),
    });
    return next.handle(req);
  }
}
