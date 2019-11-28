import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import MovieListDto from 'src/app/dto/movies-list-dto';
import Movie from 'src/app/models/movie-model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  selectedMovies = new Map();;
  selectMoviesForm: FormGroup;
  allMovies: Movie[];

  constructor(
    public movieService: MovieService,
    public fb: FormBuilder,
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
    // console.log(this.selectMoviesForm.controls.movies.controls);
  }

  onChange(movie, event) {

    if (event.target.checked) {
      this.selectedMovies.set(movie.code, movie);
    } else {
      this.selectedMovies.delete(movie.code);
    }

  }

  get movies() {
    return this.selectMoviesForm.get('movies');
  };

}