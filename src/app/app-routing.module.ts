import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieResultComponent } from "./components/movie-result/movie-result.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "movie-list" },
  { path: "movie-list", component: MovieListComponent },
  { path: "movie-result", component: MovieResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
