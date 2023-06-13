import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { usersList } from './model/users';
import { Apollo } from 'apollo-angular';
import { GET_USERS } from '../gql/users-query';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{
  allUser$: Observable<any[]> = of([]);

  constructor(private apollo :Apollo){

  }
  ngOnInit():void{
    this.allUser$ = this.apollo.
    watchQuery<{allUsers : any[]}>({
      query: GET_USERS
    }).
    valueChanges.pipe(map((result:any) => result.data.allUsers));
    console.log(this.allUser$);
    
  }
}
