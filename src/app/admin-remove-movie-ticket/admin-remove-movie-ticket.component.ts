import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieTicketService } from '../movie-ticket.service';

@Component({
  selector: 'app-admin-remove-movie-ticket',
  templateUrl: './admin-remove-movie-ticket.component.html',
  styleUrls: ['./admin-remove-movie-ticket.component.css']
})
export class AdminRemoveMovieTicketComponent implements OnInit {

  public removeMovieTicket: FormGroup;

  constructor(private formBuilder: FormBuilder, private movieTicketService: MovieTicketService, private router: Router) {
    this.removeMovieTicket = this.formBuilder.group({
      movieTicketId: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(movieTicket: FormGroup) {
    this.movieTicketService.deleteMovieTicket(this.removeMovieTicket.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/admin-dashboard']);
  }
}
