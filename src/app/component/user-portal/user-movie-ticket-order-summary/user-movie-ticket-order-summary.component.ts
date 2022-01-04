import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-movie-ticket-order-summary',
  templateUrl: './user-movie-ticket-order-summary.component.html',
  styleUrls: ['./user-movie-ticket-order-summary.component.css']
})
export class UserMovieTicketOrderSummaryComponent implements OnInit {

  public movieTickets: any;
  public userDetails: any;
  constructor(private userService: UserService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllUserDetails();
    this.getAllMovieTicketsFromCart();
  }

  getAllUserDetails() {
    this.userService.getAllUsers().subscribe(data => {
      this.userDetails = data;
    });
  }

  getAllMovieTicketsFromCart() {
    this.cartService.getAllMovieTicketsInCart().subscribe(data => {
      this.movieTickets = data;
    })
  }
}
