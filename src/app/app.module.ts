import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the SDK

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { CoreModule } from './core/core.module';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    AuthModule.forRoot({
      domain: 'dev-qel4c52gve5yd8kj.us.auth0.com',
      clientId: 'nZ9SyVljqJmr2rKQPiokHL4eNeVXJBDR',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/auth-callback'
        // redirect_uri: 'https://apollo-angular-vercel.vercel.app/auth-callback'
      },
      httpInterceptor: {
        allowedList: [`https://node-graph-ql-vercel.vercel.app/api/*`],
      },
    }),
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MyInterceptorInterceptor,
    //   multi: true
    // }
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
