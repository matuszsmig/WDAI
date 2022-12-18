import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicTripsComponent } from './components/basic-trips/basic-trips.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StarsComponent } from './components/stars/stars.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HistoryComponent } from './components/history/history.component';
import { TravelledComponent } from './components/travelled/travelled.component';
import { HomeComponent } from './components/home/home.component';
import { SingleTripComponent } from './components/single-trip/single-trip.component';
import { OpionionFormsComponent } from './components/opionion-forms/opionion-forms.component';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicTripsComponent,
    FormsComponent,
    StarsComponent,
    CartComponent,
    NavbarComponent,
    HistoryComponent,
    TravelledComponent,
    HomeComponent,
    SingleTripComponent,
    OpionionFormsComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
