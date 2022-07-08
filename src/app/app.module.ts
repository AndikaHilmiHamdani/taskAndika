import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import {MovieServiceService} from './movie/movie-service.service';
import { HeaderComponent } from './layout/header/header.component';
import { MoviePopularComponent } from './page/movie-popular/movie-popular.component';
import { BodyComponent } from './layout/body/body.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    MoviePopularComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
