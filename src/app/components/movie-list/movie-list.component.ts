import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import MovieListDto from 'src/app/dto/movies-list-dto';
import Movie from 'src/app/models/movie-model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  private maxSelected = 8;
  private selectedMovies = new Map();
  private selectMoviesForm: FormGroup;
  private allMovies: Movie[];

  private numCheckedError = false;

  constructor(
    private movieService: MovieService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllMovies();
    this.selectMoviesForm = this.fb.group({
      movies: new FormArray([]),
    })
  }

  async getAllMovies() {
    return this.movieService.getAll().subscribe((data: MovieListDto) => {
      this.allMovies = data.movies;
      this.buildMovies();
    });
  }

  buildMovies() {
    const arr = this.allMovies.map(movie => {
      return this.fb.control(false);
    });
    this.selectMoviesForm = this.fb.group({
      movies: this.fb.array(arr),
    })
  }

  onSubmit() {

    const isValid = this.isMovieCheckValid;

    this.numCheckedError = !isValid;

    const movies = [];

    if (isValid) {
      for (const [key, value] of this.selectedMovies.entries()) {
        movies.push(value);
      }
      this.router.navigate(['/movie-result'], this.queryParamRoute(movies));
    }
  }

  queryParamRoute(movies){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        selectedMovies: JSON.stringify(movies)
      }
    };

    return navigationExtras;
  }

  onChange(movie, event) {

    if (event.target.checked) {
      this.selectedMovies.set(movie.code, movie);
    } else {
      this.selectedMovies.delete(movie.code);
    }
  }

  get isMovieCheckValid() {
    return this.howManyChecked == this.maxSelected;
  }

  get howManyChecked() {
    return this.selectedMovies.size;
  }

  get movies() {
    return <FormArray>this.selectMoviesForm.get('movies');
  };

}
