import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  news;
  inputData;
  constructor(private http: HttpClient) {
    this.http.get<any>('https://newsapi.org/v2/top-headlines?apiKey=95c1934bb1414bb7bec72ffe4eb951ad&sources=the-times-of-india').subscribe(data => {
      this.news = data.articles;
      },
      );
   }

  ngOnInit() {
  }
  getCountryNews(event){
    this.inputData = event.target.value;
     
    this.http.get<any>('https://newsapi.org/v2/top-headlines?apiKey=95c1934bb1414bb7bec72ffe4eb951ad&sources='+this.inputData).subscribe(data => {
    this.news = data.articles;
    },
    );
    }
}
