import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  constructor(private apiService: ApiService, private moviesComponent: MoviesComponent) { }

  ngOnInit(): void {
  }

  async previousPage(){
    this.apiService.options.page -= 1;
    if(this.apiService.options.page < 1) this.apiService.options.page = 1;
    this.moviesComponent.movies = await this.moviesComponent.getApiResponseMovies(this.apiService.options.search);
  }

  async nextPage(){
    this.apiService.options.page += 1;
    if(this.apiService.options.page < 1) this.apiService.options.page = 1;
    this.moviesComponent.movies = await this.moviesComponent.getApiResponseMovies(this.apiService.options.search);
  }

}
