import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import {MovieServiceService} from './service/movie-service.service';
import { HeaderComponent } from './layout/header/header.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { MovieTopComponent } from './movie-top/movie-top.component';
import { MovieUpComponent } from './movie-up/movie-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    MoviePopularComponent,
    MovieTopComponent,
    MovieUpComponent,
    ContactUsComponent,

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
