import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccountLoginComponent } from './admin-account-login/admin-account-login.component';
import { AdminAddMovieTicketComponent } from './admin-add-movie-ticket/admin-add-movie-ticket.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminRemoveMovieTicketComponent } from './admin-remove-movie-ticket/admin-remove-movie-ticket.component';
import { AdminUpdateMovieTicketComponent } from './admin-update-movie-ticket/admin-update-movie-ticket.component';
import { HomeComponent } from './home/home.component';
import { MovieTicketSearchResultsComponent } from './movie-ticket-search-results/movie-ticket-search-results.component';
import { MovieTicketSearchComponent } from './movie-ticket-search/movie-ticket-search.component';
import { UserAccountDashboardComponent } from './user-account-dashboard/user-account-dashboard.component';
import { UserAccountLoginComponent } from './user-account-login/user-account-login.component';
import { UserAccountRegistrationComponent } from './user-account-registration/user-account-registration.component';
import { UserAddMovieTicketToCartComponent } from './user-add-movie-ticket-to-cart/user-add-movie-ticket-to-cart.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserListOfAllMoviesComponent } from './user-list-of-all-movies/user-list-of-all-movies.component';
import { UserMakePaymentComponent } from './user-make-payment/user-make-payment.component';
import { UserMovieTicketOrderSummaryComponent } from './user-movie-ticket-order-summary/user-movie-ticket-order-summary.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserRemoveMovieTicketFromCartComponent } from './user-remove-movie-ticket-from-cart/user-remove-movie-ticket-from-cart.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'admin-account-login', component: AdminAccountLoginComponent},
  {path: 'user-list-of-all-movies', component: UserListOfAllMoviesComponent},
  {path: 'admin-add-movie-ticket', component: AdminAddMovieTicketComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin-portal', component: AdminPortalComponent},
  {path: 'admin-remove-movie-ticket', component: AdminRemoveMovieTicketComponent},
  {path: 'admin-update-movie-ticket', component: AdminUpdateMovieTicketComponent},
  {path: 'movie-ticket-search', component: MovieTicketSearchComponent},
  {path: 'movie-ticket-search-results', component: MovieTicketSearchResultsComponent},
  {path: 'user-account-dashboard', component: UserAccountDashboardComponent},
  {path: 'user-account-login', component: UserAccountLoginComponent},
  {path: 'user-account-registration', component: UserAccountRegistrationComponent},
  {path: 'user-add-movie-ticket-to-cart', component: UserAddMovieTicketToCartComponent},
  {path: 'user-cart', component: UserCartComponent},
  {path: 'user-checkout', component: UserCheckoutComponent},
  {path: 'user-make-payment', component: UserMakePaymentComponent},
  {path: 'user-movie-ticket-order-summary', component: UserMovieTicketOrderSummaryComponent},
  {path: 'user-portal', component: UserPortalComponent},
  {path: 'user-remove-movie-ticket-from-cart', component: UserRemoveMovieTicketFromCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
