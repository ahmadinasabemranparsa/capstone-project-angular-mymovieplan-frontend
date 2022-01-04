import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieTicket } from './movie-ticket';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://localhost:8080/api/v1/cart";

  getAllMovieTicketsInCart() {
    return this.httpClient.get(`${this.baseURL}/movieTickets/all`);
  }

  addMovieTicketToCart(movieTicket: MovieTicket) {
    return this.httpClient.post(`${this.baseURL}/movieTickets/add`, movieTicket);
  }

  deleteMovieTicketFromCart(id: number) {
    return this.httpClient.delete(`${this.baseURL}/movieTickets/delete/${id}`);
  }

  deleteAllMovieTicketsFromCart() {
    return this.httpClient.delete(`${this.baseURL}/movieTickets/delete/all`);
  }
}
