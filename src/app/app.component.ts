import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rates: any[] = [];
  loading = true;
  error: any;
  constructor(private apollo: Apollo,
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document) {
  }
  ngOnInit() {

  }

  login() {
    this.auth.loginWithRedirect();
  }
}
