import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import {MovieServiceService} from './movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie: any = [];
  searchValue =''
  constructor(
    private _movieService: MovieServiceService
  ) { }
  // onClick() {
  //   //  alert("coba coba doang")
  //   // this.find()
  //   if (this.searchValue === '') {
  //     alert('isi data dulu bosss');
  //   } else {
  //     this._movieService
  //       .searchMovie(this.searchValue)
  //       .subscribe((data: any) => {
  //         this.movie = data.results;
  //         this.movie.map((item: any) => {
  //           console.log(item.original_title);
  //         });
  //       });
  //   }
  // }
  //@Output() public movieList = new EventEmitter();
  ngOnInit(): void {
    //this.movieList.emit (this.movie);
    this._movieService.getMovie().subscribe(
      (data: any) => {
        console.log(data)
        this.movie = data.results;
      })
  }
}