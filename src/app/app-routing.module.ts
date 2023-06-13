import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=> {
      return import('./task-list/task-list.module').then(_=>_.TaskListModule)
    }
  },
  {
    path:'users',
    loadChildren:()=> {
      return import('./users/users.module').then(_=>_.UsersModule)
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
