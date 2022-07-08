import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import {MovieServiceService} from '../service/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  searchValue = '';
  title = 'Movie Arena';
  result = [];
  isHasError = true;
  isDisabled = false;
  movieList: any;
  date = new Date();
  public movie: any = [];

  getMovie(event: any) {
    this.movieList = event;
  }

  constructor(private _movieService: MovieServiceService) {}
  onClick() {
    //  alert("coba coba doang")
    // this.find()
    if (this.searchValue === '') {
      alert('isi data dulu bosss');
    } else {
      this._movieService
        .searchMovie(this.searchValue)
        .subscribe((data: any) => {
          this.movie = data.results;
          console.log(this.movie);
          this.movie.map((item: any) => {
            console.log(item.original_title);
            this.searchValue = item.original_title;
            this.result[item.original_title] === this.searchValue;
          });
        });
    }
  }
  //@Output() public movieList = new EventEmitter();
  ngOnInit(): void {
    this._movieService.getMovie().subscribe(
      (data: any) => {
        console.log(data)
        this.movie = data.results;
      })
      //this.movieList.emit (this.movie);
  }
  
}