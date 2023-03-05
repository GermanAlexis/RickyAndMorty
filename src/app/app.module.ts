import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  withInterceptors,
} from '@angular/common/http';
import { HeaderModule } from './shared/components/header/header.module';
import { SpinnerInterceptor } from './shared/interceptor/spinner-interceptor';
import { SpinnerModule } from './shared/components/spinner/spinner.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    HeaderModule,
    SpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
