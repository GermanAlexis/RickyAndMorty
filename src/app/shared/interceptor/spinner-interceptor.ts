import {
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SpinnerService } from '@app/services/spinner-service.service';
import { finalize } from 'rxjs';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const loadingService = inject(SpinnerService);
    loadingService.show();
    return next.handle(req).pipe(finalize(() => loadingService.hide()));
  }
}
