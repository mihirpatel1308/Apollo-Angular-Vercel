import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './core/components/auth-callback/auth-callback.component';
import { MasterComponent } from './core/components/master/master.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: '',
    component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'task-list'
      },
      {
        path: 'task-list',
        loadChildren:()=> {
          return import('./task-list/task-list.module').then(_=>_.TaskListModule)
        },
        canActivate: [AuthGuard]
      },
      {
        path:'users',
        loadChildren:()=> {
          return import('./users/users.module').then(_=>_.UsersModule)
        },
        canActivate: [AuthGuard]
      }
    ]
  },
  // {
  //   path:'',
  //   loadChildren:()=> {
  //     return import('./task-list/task-list.module').then(_=>_.TaskListModule)
  //   }
  // },
  // {
  //   path:'users',
  //   loadChildren:()=> {
  //     return import('./users/users.module').then(_=>_.UsersModule)
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
