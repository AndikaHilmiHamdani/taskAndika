import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { IMovie } from './movie';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  
  private _url: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=8a43f1c8152c0107b8e76cb2f5e21991&language=en-US&page=1";
  private _search: string = "https://api.themoviedb.org/3/search/movie?api_key=8a43f1c8152c0107b8e76cb2f5e21991&language=en-US&"
  constructor(
    private http: HttpClient
  ) { }

  getMovie(){
    return this.http.get(this._url).pipe(
      catchError(this.errorHttpHandler)
    );
  }
  searchMovie(query:any){
    return this.http.get(this._search+'query='+query).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  errorHttpHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
