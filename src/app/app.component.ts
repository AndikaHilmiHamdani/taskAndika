import { Component, Input, Output } from '@angular/core';
import { MovieServiceService } from './service/movie-service.service';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  ngOnInit(): void {
    this._movieService.getMovie().subscribe((data: any) => {
      this.movie = data.results;
    });
  }
  //   find(){
  //     this.movie.map((item:any) => {
  //       console.log(item.original_title)
  //     })
  //     this.searchedValue = this.movie.filter ((item:any)=> item.original_title.toLoweCase().indexOf(this.searchValue.toLowerCase())>-1)
  // }
}
