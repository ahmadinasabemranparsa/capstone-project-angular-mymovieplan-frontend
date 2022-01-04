import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicket } from 'src/app/class/movie-ticket';
import { MovieTicketService } from 'src/app/service/movie-ticket.service';

@Component({
  selector: 'app-admin-update-movie-ticket',
  templateUrl: './admin-update-movie-ticket.component.html',
  styleUrls: ['./admin-update-movie-ticket.component.css']
})
export class AdminUpdateMovieTicketComponent implements OnInit {

  movieTicket: MovieTicket = new MovieTicket();

  constructor(private movieTicketService: MovieTicketService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.movieTicketService.updateMovieTicket(this.movieTicket).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin-dashboard']);
  }
}
