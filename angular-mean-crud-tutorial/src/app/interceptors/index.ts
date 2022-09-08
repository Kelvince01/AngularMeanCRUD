/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReqInterceptor } from './req-interceptor';
import { HeadersInterceptor } from './headers.interceptor';
import { NotifyInterceptor } from './notify.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  //{ provide: HTTP_INTERCEPTORS, useClass: ReqInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
  },
  //{ provide: HTTP_INTERCEPTORS, useClass: NotifyInterceptor, multi: true }
];
