import { Component, Input, OnInit } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  @Input() numberOfMovies!: number;
  page: number = 0;

  constructor(private apiService: ApiService, private moviesComponent: MoviesComponent) { }

  ngOnInit(): void {
    this.page = this.apiService.options.page;
  }

  async previousPage(){
    this.apiService.options.page -= 1;
    if(this.apiService.options.page < 1) this.apiService.options.page = 1;
    this.page = this.apiService.options.page;
    this.moviesComponent.movies = await this.moviesComponent.getApiResponseMovies(this.apiService.options.search);
  }

  async nextPage(){
    this.apiService.options.page += 1;
    if(this.apiService.options.page < 1) this.apiService.options.page = 1;
    this.page = this.apiService.options.page;
    this.moviesComponent.movies = await this.moviesComponent.getApiResponseMovies(this.apiService.options.search);
  }

}
