import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { MovieTicketService } from '../movie-ticket.service';

@Component({
  selector: 'app-user-list-of-all-movies',
  templateUrl: './user-list-of-all-movies.component.html',
  styleUrls: ['./user-list-of-all-movies.component.css']
})
export class UserListOfAllMoviesComponent implements OnInit {

  public movieTickets: any;

  constructor(private movieTicketService: MovieTicketService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMovieTickets();
  }

  getAllMovieTickets() {
    this.movieTicketService.getAllMovieTickets().subscribe(data => {
      this.movieTickets = data;
    });
  }

  addMovieTicketToCart() {
    this.router.navigate(['/user-add-movie-ticket-to-cart']);
  }

  goToCart() {
    this.router.navigate(['/user-cart']);
  }
}
