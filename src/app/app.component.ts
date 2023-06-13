import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rates: any[] =[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo){

  }
  ngOnInit() {
  }
}
