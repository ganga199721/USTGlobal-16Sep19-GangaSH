import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private http: HttpClient) { }
keyword ;
movies;
  getMovie(event)
  {
this.keyword=event.target.value;
console.log(this.keyword)
this.http.get<any>('https://www.omdbapi.com/?&apikey=2c55eb1b&s='+this.keyword).subscribe(data => {
  this.movies = data.Search;

  console.log(this.movies)

 
        },
        );
  }
  ngOnInit() {
  }

}