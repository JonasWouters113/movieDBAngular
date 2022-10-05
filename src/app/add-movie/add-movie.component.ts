import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() movieId: string = "0";
  watchedMovies: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  addMovie(id: string){
    this.watchedMovies = JSON.parse(localStorage.getItem("watched") || "[]");
    if (!this.watchedMovies.includes(id)) this.watchedMovies.push(id);
    localStorage.setItem("watched", JSON.stringify(this.watchedMovies));
  }


}
