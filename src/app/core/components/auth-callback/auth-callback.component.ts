import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {
  constructor(private router: Router,
    public auth: AuthService) {

  }
  ngOnInit(): void {
    this.auth.user$.subscribe((userData: any) => {
      if (userData && !!userData.email) {
        this.router.navigate(['task-list']);
      } else {
        this.auth.loginWithRedirect();
      }
    })
  }
}
