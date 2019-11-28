import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentmovies',
  templateUrl: './parentmovies.component.html',
  styleUrls: ['./parentmovies.component.css']
})
export class ParentmoviesComponent implements OnInit {

  selectedMovie = '';
Movies = [
{
  imageUrl : 'https://cdn.pixabay.com/photo/2017/06/29/00/10/movie-poster-2452656__340.jpg',
  name : 'Adventure',
  rating : 'Rating: 5/10',
  // tslint:disable-next-line: max-line-length
  description : 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'


},
{
  imageUrl : 'https://cdn.pixabay.com/photo/2016/03/21/20/01/chaplin-1271422__340.jpg',
  name : 'Charlie Chaplin',
  rating : 'Rating: 6/10',
  // tslint:disable-next-line: max-line-length
  description : 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'


},
{
  imageUrl : 'https://cdn.pixabay.com/photo/2019/04/08/16/27/spiderman-4112322__340.jpg',
  name : 'Spider Man',
  rating : 'Rating: 5/10',
  // tslint:disable-next-line: max-line-length
  description : 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.'


},
{
  imageUrl : 'https://cdn.pixabay.com/photo/2018/05/08/11/36/avenger-3382834__340.jpg',
  name : 'Avengers',
  rating : 'Rating: 10/10',
  // tslint:disable-next-line: max-line-length
  description : 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'


},
{
  imageUrl : 'https://cdn.pixabay.com/photo/2019/05/25/12/30/iron-man-4228269__340.jpg',
  name : 'Iron-man',
  rating : 'Rating: 5/10',
  // tslint:disable-next-line: max-line-length
  description : 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'


},
{
  imageUrl : 'https://cdn.pixabay.com/photo/2019/05/25/12/30/iron-man-4228269__340.jpg',
  name : 'Superman',
  rating : 'Rating: 5/10',
  // tslint:disable-next-line: max-line-length
  description : 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'


},
{
  imageUrl : 'https://cdn.pixabay.com/photo/2017/06/29/00/10/movie-poster-2452656__340.jpg',
  name : 'captain America',
  rating : 'Rating: 5/10',
  // tslint:disable-next-line: max-line-length
  description : 'Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'


},




]
  constructor() { }

  ngOnInit() {
  }
  sendMovie(movie) {
    console.log(movie);
    this.selectedMovie = movie;
  }
}
