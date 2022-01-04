import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-account-login',
  templateUrl: './admin-account-login.component.html',
  styleUrls: ['./admin-account-login.component.css']
})
export class AdminAccountLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/admin-dashboard']);
  }
}
