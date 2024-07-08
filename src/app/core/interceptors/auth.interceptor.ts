import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    params: req.params
    ? req.params.set('key', environment.apiKey)
    : new HttpParams().set('key', environment.apiKey),
  });
  return next(req);
};
