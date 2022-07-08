import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../service/movie-service.service';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.css']
})
export class MoviePopularComponent implements OnInit {
  movieList: any;
  public movie: any = [];
  getMovie(event: any) {
    this.movieList = event;
  }

  constructor(private _movieService: MovieServiceService) {}
  ngOnInit(): void {
    this._movieService.getPopular().subscribe(
      (data: any) => {
        console.log(data)
        this.movie = data.results;
      })
      
  }

}
