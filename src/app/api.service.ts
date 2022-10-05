import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  options: any = {
    apiKey: "4eaf474d",
    s: "pirates",
    plot: "full",
    id: 0,
    type: "movie",
    y: 0,
    r: "json",
    page: 1
  }

  constructor() { }

  standardApiCallSearch: string = `https://www.omdbapi.com/?apiKey=${this.options.apiKey}`
  apiCall: string = "";
  data: any;

  getMovies(title: string){
    this.options.search = title;

    this.apiCall = `${this.standardApiCallSearch}&type=${this.options.type}`;
    if(this.options.s != "")   this.apiCall += `&s=${this.options.search}`;
    if(this.options.page != 1) this.apiCall += `&page=${this.options.page}`;
    if(this.options.y != 0)    this.apiCall += `&y=${this.options.y}`;

    this.apiCall += `&r=${this.options.r}`;
    console.log(this.apiCall);
    return fetch(this.apiCall);
  }

  getMovie(id: number){
    this.options.id = id;

    this.apiCall = `${this.standardApiCallSearch}&type=${this.options.type}`;
    if(this.options.i != "")    this.apiCall += `&i=${this.options.id}`;
    if(this.options.plot != "")    this.apiCall += `&plot=${this.options.plot}`;

    this.apiCall += `&r=${this.options.r}`;
    console.log(this.apiCall);
    return fetch(this.apiCall);
  }
}
