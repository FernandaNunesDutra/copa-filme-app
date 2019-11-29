import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "src/app/services/movie-service";
import MovieListDto from "src/app/dto/movies-list-dto";
import Movie from "src/app/models/movie-model";
import { ActivatedRoute } from "@angular/router";
import ChampionsDto from "src/app/dto/champions-dto";
import SelectedMoviesDto from "src/app/dto/selected-movies-dto";

@Component({
  selector: "app-movie-result",
  templateUrl: "./movie-result.component.html",
  styleUrls: ["./movie-result.component.css"]
})

export class MovieResultComponent implements OnInit {

  private selectedMovies = new SelectedMoviesDto();
  private first: Movie;
  private second: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      const selectedMovies = JSON.parse(params.selectedMovies) as Movie[];
      this.selectedMovies.selectedMovies = selectedMovies;
    });
  }

  ngOnInit() {
    this.getChampions();
  }

  async getChampions() {
    return this.movieService.getChampions(this.selectedMovies).subscribe((data: ChampionsDto) => {

      this.first = data.first;
      this.second = data.second;

    });
  }

}
