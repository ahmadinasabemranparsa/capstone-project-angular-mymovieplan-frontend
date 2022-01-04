import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccountLoginComponent } from './component/admin-portal/admin-account-login/admin-account-login.component';
import { AdminAddMovieTicketComponent } from './component/admin-portal/admin-add-movie-ticket/admin-add-movie-ticket.component';
import { AdminDashboardComponent } from './component/admin-portal/admin-dashboard/admin-dashboard.component';
import { AdminPortalComponent } from './component/admin-portal/admin-portal/admin-portal.component';
import { AdminRemoveMovieTicketComponent } from './component/admin-portal/admin-remove-movie-ticket/admin-remove-movie-ticket.component';
import { AdminUpdateMovieTicketComponent } from './component/admin-portal/admin-update-movie-ticket/admin-update-movie-ticket.component';
import { HomeComponent } from './component/home/home.component';
import { MovieTicketSearchResultsComponent } from './component/user-portal/movie-ticket-search-results/movie-ticket-search-results.component';
import { MovieTicketSearchComponent } from './component/user-portal/movie-ticket-search/movie-ticket-search.component';
import { UserAccountDashboardComponent } from './component/user-portal/user-account-dashboard/user-account-dashboard.component';
import { UserAccountLoginComponent } from './component/user-portal/user-account-login/user-account-login.component';
import { UserAccountRegistrationComponent } from './component/user-portal/user-account-registration/user-account-registration.component';
import { UserAddMovieTicketToCartComponent } from './component/user-portal/user-add-movie-ticket-to-cart/user-add-movie-ticket-to-cart.component';
import { UserCartComponent } from './component/user-portal/user-cart/user-cart.component';
import { UserCheckoutComponent } from './component/user-portal/user-checkout/user-checkout.component';
import { UserMakePaymentComponent } from './component/user-portal/user-make-payment/user-make-payment.component';
import { UserMovieTicketOrderSummaryComponent } from './component/user-portal/user-movie-ticket-order-summary/user-movie-ticket-order-summary.component';
import { UserPortalComponent } from './component/user-portal/user-portal/user-portal.component';
import { UserRemoveMovieTicketFromCartComponent } from './component/user-portal/user-remove-movie-ticket-from-cart/user-remove-movie-ticket-from-cart.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'admin-portal', component: AdminPortalComponent},
  {path: 'admin-account-login', component: AdminAccountLoginComponent},
  {path: 'admin-add-movie-ticket', component: AdminAddMovieTicketComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'admin-remove-movie-ticket', component: AdminRemoveMovieTicketComponent},
  {path: 'admin-update-movie-ticket', component: AdminUpdateMovieTicketComponent},
  {path: 'movie-ticket-search', component: MovieTicketSearchComponent},
  {path: 'user-account-dashboard', component: UserAccountDashboardComponent},
  {path: 'user-account-login', component: UserAccountLoginComponent},
  {path: 'user-account-registration', component: UserAccountRegistrationComponent},
  {path: 'user-cart', component: UserCartComponent},
  {path: 'user-checkout', component: UserCheckoutComponent},
  {path: 'user-make-payment', component: UserMakePaymentComponent},
  {path: 'user-movie-ticket-order-summary', component: UserMovieTicketOrderSummaryComponent},
  {path: 'user-portal', component: UserPortalComponent},
  {path: 'user-remove-movie-ticket-from-cart', component: UserRemoveMovieTicketFromCartComponent},
  {path: 'movie-ticket-search-results', component: MovieTicketSearchResultsComponent},
  {path: 'user-add-movie-ticket-to-cart', component: UserAddMovieTicketToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
