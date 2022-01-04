import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicket } from 'src/app/class/movie-ticket';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-user-add-movie-ticket-to-cart',
  templateUrl: './user-add-movie-ticket-to-cart.component.html',
  styleUrls: ['./user-add-movie-ticket-to-cart.component.css']
})
export class UserAddMovieTicketToCartComponent implements OnInit {

  movieTicket: MovieTicket = new MovieTicket();

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cartService.addMovieTicketToCart(this.movieTicket.id).subscribe(data => {
      console.log(data)
    });
    this.router.navigate(['/movie-ticket-search-results']);
  }
}
