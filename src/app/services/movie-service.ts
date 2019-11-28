import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import Config from "../config";
import { Observable } from 'rxjs';
import MovieListDto from '../dto/movies-list-dto';

@Injectable()
export class MovieService {

    constructor(private apiService: ApiService<MovieListDto>) { }

    getAll(): Observable<MovieListDto> {
        return this.apiService.getAll(Config.allMoviesURL);
    }

}