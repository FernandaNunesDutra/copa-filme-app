import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Service */
import { MovieService } from "./services/movie-service";
import { ApiService } from "./services/api-service";

/* Components */
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MovieService, ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }