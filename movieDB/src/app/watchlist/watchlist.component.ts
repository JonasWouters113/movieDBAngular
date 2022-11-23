import { Component, OnInit } from '@angular/core';
import { OwnApiService } from '../own-api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchList: [] = [];
  inWatchList: boolean = true;

  constructor(private ownApiService: OwnApiService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(): void{
    this.ownApiService.getMovies().subscribe((data:any)=>{console.log(data);this.watchList = data});
  }
}
