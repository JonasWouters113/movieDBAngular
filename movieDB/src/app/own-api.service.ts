import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieAPI } from './movie-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnApiService {
  url = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getMovie(id: number): Observable<MovieAPI>{
    let apiUrl = this.url + "movies/" + id;
    return this.http.get<MovieAPI>(apiUrl);
  }

  getMovieByImdb(imdbID: String): Observable<MovieAPI[]>{
    let apiUrl = this.url + "movies?imdbID=" + imdbID;
    return this.http.get<MovieAPI[]>(apiUrl);
  }

  getMovies():Observable<MovieAPI[]>{
    let apiUrl = this.url + "movies/";
    return this.http.get<MovieAPI[]>(apiUrl);
  }

  getWatchedMovies():Observable<MovieAPI[]>{
    let apiUrl = this.url + "movies?watched=true";
    console.log(apiUrl)
    return this.http.get<MovieAPI[]>(apiUrl);
  }

  addMovie(movie: MovieAPI): Observable<any>{
    movie.Score = "0";
    movie.watched = false;
    let apiUrl = this.url + "movies/";
    return this.http.post(apiUrl, movie);
  }

  removeMovie(id: number): Observable<any>{
    let apiUrl = this.url + "movies/" + id;
    return this.http.delete(apiUrl);
  }

  updateMovieScore(movie: MovieAPI, score: String): Observable<MovieAPI>{
    const body = {Score: score};
    let apiUrl = this.url + "movies/" + movie.id;
    return this.http.patch<MovieAPI>(apiUrl, body);
  }

  updateMovieWatched(movie: MovieAPI, watched: boolean): Observable<MovieAPI>{
    console.log(watched)
    const body = {watched: !watched};
    let apiUrl = this.url + "movies/" + movie.id;
    return this.http.patch<MovieAPI>(apiUrl, body);
  }
}
