import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieslistService } from '../movieslist.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.page.html',
  styleUrls: ['./movieslist.page.scss'],
})
export class MovieslistPage implements OnInit {

  constructor(
    private router: Router,
    private movieslistservice: MovieslistService
  ) { }

  movies = [];

  ngOnInit() {}

  changeUrl(user){
    const id = user.id;
    const url = `movieslist/${id}`;
    this.router.navigateByUrl(url);
  }

  ionViewDidEnter() {
    console.log('view enter');
    this.movies = this.movieslistservice.getAllMovies();
  }

}
