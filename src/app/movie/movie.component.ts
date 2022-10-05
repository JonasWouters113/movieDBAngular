import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  @Input() movie: any;

  film: any;
  isDetail: Boolean = false;

  ngOnInit(): void {
  }

  toggleDetails(){
    this.isDetail = !this.isDetail;
  }
}
