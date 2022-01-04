import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-account-registration',
  templateUrl: './user-account-registration.component.html',
  styleUrls: ['./user-account-registration.component.css']
})
export class UserAccountRegistrationComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.goToUserAccountLogin();
    })
  }

  goToUserAccountLogin() {
    this.router.navigate(['/user-account-login']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
