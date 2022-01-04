import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserPortalComponent } from './component/user-portal/user-portal/user-portal.component';
import { MovieTicketSearchComponent } from './component/user-portal/movie-ticket-search/movie-ticket-search.component';
import { UserAccountRegistrationComponent } from './component/user-portal/user-account-registration/user-account-registration.component';
import { UserAccountLoginComponent } from './component/user-portal/user-account-login/user-account-login.component';
import { UserAccountDashboardComponent } from './component/user-portal/user-account-dashboard/user-account-dashboard.component';
import { UserCartComponent } from './component/user-portal/user-cart/user-cart.component';
import { UserCheckoutComponent } from './component/user-portal/user-checkout/user-checkout.component';
import { UserMakePaymentComponent } from './component/user-portal/user-make-payment/user-make-payment.component';
import { UserMovieTicketOrderSummaryComponent } from './component/user-portal/user-movie-ticket-order-summary/user-movie-ticket-order-summary.component';
import { AdminPortalComponent } from './component/admin-portal/admin-portal/admin-portal.component';
import { AdminDashboardComponent } from './component/admin-portal/admin-dashboard/admin-dashboard.component';
import { AdminAddMovieTicketComponent } from './component/admin-portal/admin-add-movie-ticket/admin-add-movie-ticket.component';
import { AdminRemoveMovieTicketComponent } from './component/admin-portal/admin-remove-movie-ticket/admin-remove-movie-ticket.component';
import { AdminUpdateMovieTicketComponent } from './component/admin-portal/admin-update-movie-ticket/admin-update-movie-ticket.component';
import { AdminAccountLoginComponent } from './component/admin-portal/admin-account-login/admin-account-login.component';
import { HomeComponent } from './component/home/home.component';
import { UserRemoveMovieTicketFromCartComponent } from './component/user-portal/user-remove-movie-ticket-from-cart/user-remove-movie-ticket-from-cart.component';
import { UserNavbarComponent } from './component/navbar/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './component/navbar/admin-navbar/admin-navbar.component';
import { MovieTicketSearchResultsComponent } from './component/user-portal/movie-ticket-search-results/movie-ticket-search-results.component';
import { UserAddMovieTicketToCartComponent } from './component/user-portal/user-add-movie-ticket-to-cart/user-add-movie-ticket-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPortalComponent,
    MovieTicketSearchComponent,
    UserAccountRegistrationComponent,
    UserAccountLoginComponent,
    UserAccountDashboardComponent,
    UserCartComponent,
    UserCheckoutComponent,
    UserMakePaymentComponent,
    UserMovieTicketOrderSummaryComponent,
    AdminPortalComponent,
    AdminDashboardComponent,
    AdminAddMovieTicketComponent,
    AdminRemoveMovieTicketComponent,
    AdminUpdateMovieTicketComponent,
    AdminAccountLoginComponent,
    HomeComponent,
    UserRemoveMovieTicketFromCartComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    MovieTicketSearchResultsComponent,
    UserAddMovieTicketToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
