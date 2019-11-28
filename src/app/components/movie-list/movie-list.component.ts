import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import MovieListDto from 'src/app/dto/movies-list-dto';
import Movie from 'src/app/models/movie-model';
import { checkboxValidator } from '../validator/checkbox-validator';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  maxSelected = 8;
  
  selectedMovies = new Map();
  selectMoviesForm: FormGroup;
  allMovies: Movie[];
  
  numCheckedError = false;
  
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
    
    const isValid = this.isMovieCheckValid;
    this.numCheckedError = !isValid;
    
    if(isValid){

    }
  }

  onChange(movie, event) {

    if (event.target.checked) {
      this.selectedMovies.set(movie.code, movie);
    } else {
      this.selectedMovies.delete(movie.code);
    }
  }

  get isMovieCheckValid(){
    return this.howManyChecked == this.maxSelected;
  }

  get howManyChecked(){
    return this.selectedMovies.size;
  }

  get movies() {
    return <FormArray>this.selectMoviesForm.get('movies');
  };

}
