import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { MasterComponent } from './components/master/master.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        AuthCallbackComponent,
        MasterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
    ]
})
export class CoreModule { }
