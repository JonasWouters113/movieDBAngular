import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  optionsSearch: any = {
    apiKey: "4eaf474d",
    s: "pirates",
    type: "movie",
    y: 0,
    r: "json",
    page: 1
  }

  constructor() { }

  standardApiCallSearch: string = `https://www.omdbapi.com/?apiKey=${this.optionsSearch.apiKey}`
  apiCall: string = "";
  data: any;

  getMovies(){

    this.apiCall = `${this.standardApiCallSearch}&type=${this.optionsSearch.type}`
    if(this.optionsSearch.s != "")   this.apiCall += `&s=${this.optionsSearch.s}`;
    if(this.optionsSearch.page != 1) this.apiCall += `&page=${this.optionsSearch.page}`;
    if(this.optionsSearch.y != 0)    this.apiCall += `&y=${this.optionsSearch.y}`;

    this.apiCall += `&r=${this.optionsSearch.r}`;

    return fetch(this.apiCall);
  }

  optionsId: any = {
    apiKey: "4eaf474d",
    type: "movie",
    y: 0,
    plot: "full",
    r: "json"
  }

  standardApiCallId: string = `https://www.omdbapi.com/?apiKey=${this.optionsId.apiKey}`

  getMovie(id: string){
    if(this.optionsId.i != 0) {
      this.apiCall = `${this.standardApiCallId}&type=${this.optionsId.type}`
      this.apiCall                            += `&i=${id}`;
      if(this.optionsId.y != 0) this.apiCall  += `&y=${this.optionsId.y}`;
      this.apiCall                            += `&plot=${this.optionsId.plot}`;

      this.apiCall += `&r=${this.optionsId.r}`;

      return fetch(this.apiCall);
    }
    return
  }
}
