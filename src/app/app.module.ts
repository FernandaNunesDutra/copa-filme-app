import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/* Service */
import { MovieService } from "./services/movie-service";
import { ApiService } from "./services/api-service";

/* Components */
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieResultComponent } from "./components/movie-result/movie-result.component";
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    ApiService,
    { provide: APP_BASE_HREF, useValue:"/"}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
