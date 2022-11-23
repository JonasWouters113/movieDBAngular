import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {
  url = "https://www.omdbapi.com/?apikey=f021795d&";

  constructor(private http: HttpClient) {
  }

  getMovies(search: string, page: string, type: string):Observable<any>{
    let apiUrl = this.url + new URLSearchParams({
      s: search,
      page: page,
      type: type
    })

    return this.http.get<any>(apiUrl);
  }
}
