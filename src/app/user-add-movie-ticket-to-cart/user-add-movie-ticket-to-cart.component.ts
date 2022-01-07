import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-user-add-movie-ticket-to-cart',
  templateUrl: './user-add-movie-ticket-to-cart.component.html',
  styleUrls: ['./user-add-movie-ticket-to-cart.component.css']
})
export class UserAddMovieTicketToCartComponent implements OnInit {

  public addMovieTicketToCart: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private cartService: CartService,
              private router: Router) {
                this.addMovieTicketToCart = this.formBuilder.group({
                  movieTicketId: ['']
                });
              }

  ngOnInit(): void {
  }

  onSubmit(movieTicketIdNumber: FormGroup) {
    this.cartService.addMovieTicketToCart(this.addMovieTicketToCart.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/movie-ticket-search-results']);
  }
}
