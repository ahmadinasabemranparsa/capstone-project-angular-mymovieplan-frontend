import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieTicket } from './movie-ticket';

@Injectable({
  providedIn: 'root'
})
export class MovieTicketService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080/api/v1/movieTicket";

  getAllMovieTickets() {
    return this.httpClient.get(`${this.baseURL}/movieTickets/all`);
  }

  getMovieTicketByMovieName(movieName: string) {
    return this.httpClient.get(`${this.baseURL}/getAParticularMovie/${movieName}`);
  }

  addMovieTicket(movieTicket: MovieTicket) {
    return this.httpClient.post(`${this.baseURL}/movieTickets/add`, movieTicket);
  }

  updateMovieTicket(movieTicket: MovieTicket) {
    return this.httpClient.put(`${this.baseURL}/movieTickets/update`, movieTicket);
  }

  deleteMovieTicket(id: number) {
    return this.httpClient.delete(`${this.baseURL}/movieTickets/delete/${id}`);
  }
}
