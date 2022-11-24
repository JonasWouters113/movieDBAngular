import { Component, OnInit } from '@angular/core';
import { MovieAPI } from '../movie-api';
import { OwnApiService } from '../own-api.service';

@Component({
  selector: 'app-watched-list',
  templateUrl: './watched-list.component.html',
  styleUrls: ['./watched-list.component.scss']
})
export class WatchedListComponent implements OnInit {
  watchedList: MovieAPI[] = [];
  search: string = "";
  inWatchedList: boolean=true;

  constructor(private ownApiService: OwnApiService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(): void{
    this.ownApiService.getWatchedMovies().subscribe((data:any)=>{
      console.log(data);
      this.watchedList = data
      this.watchedList.sort((a, b) => a.score - b.score)
    })
    if(this.search !== ""){
      let filterTemp: MovieAPI[] = [];
      setTimeout(() => {
        this.watchedList.forEach((item) =>{
          let title: String = item['Title'];
          if(title.toLowerCase().includes(this.search.toLowerCase())){
            filterTemp.push(item);
          }
        });
        this.watchedList = filterTemp;
      }, 500);
    }
  }

  onSearchChange(e: any){
    this.search = e.target.value;
    this.reload();
  }

}
