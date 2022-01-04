import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicket } from 'src/app/class/movie-ticket';
import { MovieTicketService } from 'src/app/service/movie-ticket.service';

@Component({
  selector: 'app-user-remove-movie-ticket-from-cart',
  templateUrl: './user-remove-movie-ticket-from-cart.component.html',
  styleUrls: ['./user-remove-movie-ticket-from-cart.component.css']
})
export class UserRemoveMovieTicketFromCartComponent implements OnInit {

  movieTicket: MovieTicket = new MovieTicket();
  
  constructor(private movieTIcketService: MovieTicketService, private router: Router) { }

  ngOnInit(): void {
  }

  removeMovieTicketFromCart() {
    this.movieTIcketService.deleteMovieTicket(this.movieTicket.id).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/user-cart']);
  }
}
