import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicket } from 'src/app/class/movie-ticket';
import { MovieTicketService } from 'src/app/service/movie-ticket.service';

@Component({
  selector: 'app-admin-remove-movie-ticket',
  templateUrl: './admin-remove-movie-ticket.component.html',
  styleUrls: ['./admin-remove-movie-ticket.component.css']
})
export class AdminRemoveMovieTicketComponent implements OnInit {

  movieTicket: MovieTicket = new MovieTicket();

  constructor(private movieTicketService: MovieTicketService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.movieTicketService.deleteMovieTicket(this.movieTicket.id).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin-dashboard']);
  }
}
