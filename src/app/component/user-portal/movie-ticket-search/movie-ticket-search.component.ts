import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicketSearch } from 'src/app/class/movie-ticket-search';
import { MovieTicketSearchResultsService } from 'src/app/service/movie-ticket-search-results.service';
import { MovieTicketSearchResultsComponent } from '../movie-ticket-search-results/movie-ticket-search-results.component';

@Component({
  selector: 'app-movie-ticket-search',
  templateUrl: './movie-ticket-search.component.html',
  styleUrls: ['./movie-ticket-search.component.css']
})
export class MovieTicketSearchComponent implements OnInit {

  public movieTickets: any;
  public movieTicket: MovieTicketSearch = new MovieTicketSearch();
  constructor(private movieTicketSearchResultsService: MovieTicketSearchResultsService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.movieTicketSearchResultsService.createMovieTicketSearchResult(this.movieTicket.movieName).subscribe(data => {
      console.log(data);
    })
    this.addMovieTicketToCart();
  }

  addMovieTicketToCart() {
    this.router.navigate(['/movie-ticket-search-results']);
  }
}
