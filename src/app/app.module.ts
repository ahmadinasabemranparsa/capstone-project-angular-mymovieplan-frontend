import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAccountLoginComponent } from './admin-account-login/admin-account-login.component';
import { AdminAddMovieTicketComponent } from './admin-add-movie-ticket/admin-add-movie-ticket.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminRemoveMovieTicketComponent } from './admin-remove-movie-ticket/admin-remove-movie-ticket.component';
import { AdminUpdateMovieTicketComponent } from './admin-update-movie-ticket/admin-update-movie-ticket.component';
import { HomeComponent } from './home/home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { MovieTicketSearchComponent } from './movie-ticket-search/movie-ticket-search.component';
import { MovieTicketSearchResultsComponent } from './movie-ticket-search-results/movie-ticket-search-results.component';
import { UserAccountDashboardComponent } from './user-account-dashboard/user-account-dashboard.component';
import { UserAccountLoginComponent } from './user-account-login/user-account-login.component';
import { UserAccountRegistrationComponent } from './user-account-registration/user-account-registration.component';
import { UserAddMovieTicketToCartComponent } from './user-add-movie-ticket-to-cart/user-add-movie-ticket-to-cart.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserMakePaymentComponent } from './user-make-payment/user-make-payment.component';
import { UserMovieTicketOrderSummaryComponent } from './user-movie-ticket-order-summary/user-movie-ticket-order-summary.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserRemoveMovieTicketFromCartComponent } from './user-remove-movie-ticket-from-cart/user-remove-movie-ticket-from-cart.component';
import { UserListOfAllMoviesComponent } from './user-list-of-all-movies/user-list-of-all-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAccountLoginComponent,
    AdminAddMovieTicketComponent,
    AdminDashboardComponent,
    AdminPortalComponent,
    AdminRemoveMovieTicketComponent,
    AdminUpdateMovieTicketComponent,
    HomeComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    MovieTicketSearchComponent,
    MovieTicketSearchResultsComponent,
    UserAccountDashboardComponent,
    UserAccountLoginComponent,
    UserAccountRegistrationComponent,
    UserAddMovieTicketToCartComponent,
    UserCartComponent,
    UserCheckoutComponent,
    UserMakePaymentComponent,
    UserMovieTicketOrderSummaryComponent,
    UserPortalComponent,
    UserRemoveMovieTicketFromCartComponent,
    UserListOfAllMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
