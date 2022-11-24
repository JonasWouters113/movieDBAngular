import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieAPIService } from '../movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: [] = [];
  search: string = "pirates";
  page: number = 1;
  type: string = "movie";
  totalResults: number = 0;
  totalPages: number = 0;

  constructor(private apiService: MovieAPIService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.apiService.getMovies(this.search, this.page.toString(), this.type).subscribe((data:any)=>{
      console.log(data);
      if(data.Response == 'True'){
        this.movies = data.Search
        this.totalResults = data.totalResults;
        this.totalPages = Math.ceil(+this.totalResults / 10);
      } else {
        alert("Sorry! " + this.type + ": " + this.search + " does not exist in not found!");
      }
    });
  }

  nextPage(): void{
    this.page++;
    this.getMovies();
  }

  prevPage(): void{
    this.page--
    this.getMovies();
  }

  OnSearchChange(e: any){
    this.search = e.target.value;
    this.page = 1;
    this.getMovies();
  }
}
