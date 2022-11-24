import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MovieAPI } from '../movie-api';
import { OwnApiService } from '../own-api.service';
import { Router } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { WatchlistComponent } from '../watchlist/watchlist.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent implements OnInit {
  @Input() movie: MovieAPI = {Poster: "", Title: "", Type: "", Year: "", imdbID: "", score: 4.5, watched: true, id: 0}
  @Input() inWatchList: boolean = false;
  inWatchedList: boolean = false;
  edit: boolean = false;
  inDb: boolean = false;
  score: number = 0;

  constructor(private ownApiService: OwnApiService, private router: Router, private watchList: WatchlistComponent) { }

  ngOnInit(): void {
    this.score = this.movie.score;
    this.inWatchedList = this.movie.watched;
    console.log(this.inWatchedList)
  }

  addMovie(movie:MovieAPI): void {
    let movies: MovieAPI[] = [];
    this.ownApiService.getMovieByImdb(movie.imdbID).subscribe((res) => movies = res);
    setTimeout(() => {
      if(movies.length == 0){
        this.ownApiService.addMovie(movie).subscribe((response) => console.log(response));
        setTimeout(() => this.router.navigate(['/watchlist']), 500);
      } else {
        let alertString = "Movie: " + movie.Title + " is already in watchlist!"
        alert(alertString)
      }
    }, 500);
  }

  removeMovie(id: number): void {
    this.ownApiService.removeMovie(id).subscribe(() => console.log(`Movie: ${id} id deleted`));
    setTimeout(() => this.watchList.reload(), 500);
  }

  addReviewForm(): void{
    this.edit = !this.edit;
  }

  toggleWatched(movie: MovieAPI){
    this.ownApiService.updateMovieWatched(this.movie, movie.watched).subscribe(() => console.log("Watched is toggled?"));
    setTimeout(() => this.watchList.reload(), 500);
  }

  onRangeChange(e: any){
    this.score = e.target.value;
    this.ownApiService.updateMovieScore(this.movie, e.target.value).subscribe(() => console.log(`Score is updated`));
  }
}
