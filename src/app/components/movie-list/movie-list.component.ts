import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import MovieListDto from 'src/app/dto/movies-list-dto';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  movies: any = [];
  selectMoviesFrorm: FormGroup;

  constructor(
    public movieService: MovieService,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.getAllMovies();
    this.selectMoviesFrorm = this.fb.group({
      selectedMovies: [''],
    })
  }

  async getAllMovies() {
    return this.movieService.getAll().subscribe((data: MovieListDto) => {
      this.movies = data.movies;
    });
  }


}
