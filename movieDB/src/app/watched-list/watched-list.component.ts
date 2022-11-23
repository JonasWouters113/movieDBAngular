import { Component, OnInit } from '@angular/core';
import { OwnApiService } from '../own-api.service';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.scss']
})
export class WatchedListComponent implements OnInit {
  watchedList: [] = [];
  inWatchedList: boolean=true;

  constructor(private ownApiService: OwnApiService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(): void{
    this.ownApiService.getWatchedMovies().subscribe((data:any)=>{console.log(data);this.watchedList = data});
  }

}
