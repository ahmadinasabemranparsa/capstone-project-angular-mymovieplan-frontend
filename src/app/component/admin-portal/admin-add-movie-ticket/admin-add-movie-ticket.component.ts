import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicket } from 'src/app/class/movie-ticket';
import { MovieTicketService } from 'src/app/service/movie-ticket.service';

@Component({
  selector: 'app-admin-add-movie-ticket',
  templateUrl: './admin-add-movie-ticket.component.html',
  styleUrls: ['./admin-add-movie-ticket.component.css']
})
export class AdminAddMovieTicketComponent implements OnInit {

  movieTicket: MovieTicket = new MovieTicket();

  constructor(private movieTicketService: MovieTicketService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.movieTicketService.addMovieTicket(this.movieTicket).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin-dashboard']);
  }
}
