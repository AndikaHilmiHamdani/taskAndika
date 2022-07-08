import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../service/movie-service.service';
@Component({
  selector: 'app-movie-top',
  templateUrl: './movie-top.component.html',
  styleUrls: ['./movie-top.component.css']
})
export class MovieTopComponent implements OnInit {

  movieList: any;
  public movie: any = [];
  getMovie(event: any) {
    this.movieList = event;
  }

  constructor(private _movieService: MovieServiceService) {}
  ngOnInit(): void {
    this._movieService.getTop().subscribe(
      (data: any) => {
        console.log(data)
        this.movie = data.results;
      })
      
  }

}
