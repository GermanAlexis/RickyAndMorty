import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { SpinnerService } from 'src/app/pages/services/progress-bar/progress.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const loadingService = inject(SpinnerService);
    loadingService.show();
    return next.handle(req).pipe(finalize(() => loadingService.hide()));
  }
}
