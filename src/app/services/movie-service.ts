import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import Config from "../config";
import { Observable } from 'rxjs';
import MovieListDto from '../dto/movies-list-dto';
import ChampionsDto from '../dto/champions-dto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) {}

    getAll(): Observable<MovieListDto> {
        const apiService = new ApiService<MovieListDto>(this.http);
        return apiService.getAll(Config.allMoviesURL);
    }

    getChampions(selectedMovies): Observable<ChampionsDto> {
        const apiService = new ApiService<ChampionsDto>(this.http);
        return apiService.get(selectedMovies, Config.championsMoviesURL);
    }

}