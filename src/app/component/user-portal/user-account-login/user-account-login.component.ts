import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account-login',
  templateUrl: './user-account-login.component.html',
  styleUrls: ['./user-account-login.component.css']
})
export class UserAccountLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/user-account-dashboard']);
  }
}
