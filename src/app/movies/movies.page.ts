import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieslistService } from '../movieslist.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private movieslistservice: MovieslistService
  ) {}

  movies = [];
  singleMovie;

  ngOnInit() {
    this.movies = this.movieslistservice.getAllMovies();
    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('id');
      this.singleMovie = this.movies.find(obj => {
        return obj.id.includes(val);
      });
    });
  }

  /*async deleteMovie() {
    console.log('deleteMovie', this.singleMovie);
    const alert = await this.alertController.create({
      header: 'Alert',
      message: `Are you sure you want to delete ${this.singleMovie.name}?`,
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Confirm delete');
            this.movieslistservice.deleteMovie(this.singleMovie.id);
            this.router.navigateByUrl('/movieslist');
          }
        }
      ]
    });
    alert.present();
  }*/
  
}

