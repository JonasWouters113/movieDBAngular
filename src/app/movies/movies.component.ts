import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { parse } from 'postcss';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  movies:any;
  searchTitle: string = "pirates";

  ngOnInit(): void {
    this.inVariable(this.searchTitle);
  }

  getApiResponseMovies(title: string){
    return this.apiService.getMovies(title)
    .then((response) => response.json())
    .then((data) => data)
    .catch(error => console.log('error:', error));
  }

  async inVariable(title:string){
    this.movies = await this.getApiResponseMovies(title);
  }

  async onSearch(form: NgForm){
    if(form.value.title == "") return;
    this.searchTitle = form.value.title;
    console.log(this.searchTitle)
    this.movies = await this.getApiResponseMovies(this.searchTitle);
    form.reset();
  }
}
