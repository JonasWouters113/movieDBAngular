import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  options: any = {
    apiKey: "4eaf474d",
    s: "pirates",
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

    this.apiCall = `${this.standardApiCallSearch}&type=${this.options.type}`
    if(this.options.s != "")   this.apiCall += `&s=${this.options.search}`;
    if(this.options.page != 1) this.apiCall += `&page=${this.options.page}`;
    if(this.options.y != 0)    this.apiCall += `&y=${this.options.y}`;

    this.apiCall += `&r=${this.options.r}`;

    return fetch(this.apiCall);
  }
}
