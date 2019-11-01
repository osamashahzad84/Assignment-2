import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieslistService {

  Movies = [
    {id: '1', name:'13 Hours: The Secret Soldiers of Benghazi'},
    {id: '2', name:'Enemy at the Gates'},
    {id: '3', name:'The Shawshank Redemption'},
    {id: '4', name:'Forrest Gump'},
    {id: '5', name:'Baby Driver'},
    {id: '6', name:'Avengers'},
    {id: '7', name:'Saving Private Ryan'},
    {id: '8', name:'God Father'},
    {id: '9', name:'Sully'},
    {id: '10', name:'Harry Potter'},
  ]

  constructor() { }

  get getMovie() {
    return this.Movies;
  }

  getAllMovies() {
    return this.Movies;
  }

  deleteMovie(id) {
    this.Movies = this.Movies.filter(e => {
      return e.id !== id;
    });
  }

  saveMovie(id, name) {
    this.Movies.push({id:id,name:name});
  }
}
