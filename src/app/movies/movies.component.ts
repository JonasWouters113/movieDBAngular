import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  movies:any;

  ngOnInit(): void {
    this.inVariable();
  }

  getApiResponseMovies(){
    return this.apiService.getMovies()
    .then((response) => response.json())
    .then((data) => data.Search)
    .catch(error => console.log('error:', error));
  }

  async inVariable(){
    this.movies = await this.getApiResponseMovies();
  }
}
