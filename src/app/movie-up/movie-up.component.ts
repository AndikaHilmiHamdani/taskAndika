import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from '../service/movie-service.service';

@Component({
  selector: 'app-movie-up',
  templateUrl: './movie-up.component.html',
  styleUrls: ['./movie-up.component.css']
})
export class MovieUpComponent implements OnInit {

  movieList: any;
  public movie: any = [];
  getMovie(event: any) {
    this.movieList = event;
  }

  constructor(private _movieService: MovieServiceService) {}
  ngOnInit(): void {
    this._movieService.getUp().subscribe(
      (data: any) => {
        console.log(data)
        this.movie = data.results;
      })
      
  }

}
