import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[]{
    let movies: Movie[] = [];

    let movie1: Movie = {
      id: 1,
      name: "Film 1",
      rating: 4.5
    };

    let movie2: Movie = {
      id: 2,
      name: "Film 2",
      rating: 2.7
    }

    movies.push(movie1);
    movies.push(movie2);

    return movies;
  }
}
