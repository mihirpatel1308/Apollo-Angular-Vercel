import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map, of } from 'rxjs';
import { TaskList } from '../task-list';
import { GET_BookList, GET_TaskList, UPDATE_TaskList } from '../gql/task-list-query';
import { DemoService } from '../demo.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apollo: Apollo,
    private demoService: DemoService, public auth: AuthService) { }


  allBookList$: Observable<any[]> = of([]);
  isUpdate: boolean = false;
  ngOnInit(): void {
    this.allBookList$ = this.apollo.
      watchQuery<{ books: any[] }>({
        query: GET_BookList
      })
      .valueChanges.pipe(map((result) => result.data.books))


    this.demoService.getTours().subscribe((response: any) => {
      console.log('response : ', response);

    });
  }
}
