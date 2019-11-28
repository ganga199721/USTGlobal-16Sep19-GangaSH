import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
news;
inputData;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
search(event)
{
  this.inputData = event.target.value;
  this.http.get<any>('https://newsapi.org/v2/everything?apiKey=95c1934bb1414bb7bec72ffe4eb951ad&q='+this.inputData).subscribe(data => {
      this.news = data.articles;
    
      },
      );
}
}
