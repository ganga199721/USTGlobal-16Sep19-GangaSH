import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
enews;
snews;
news;
  constructor(private http: HttpClient) { 
    this.getEntertainmentNews();
    this.getsportsNews();
    this.getNews();
  }

  ngOnInit() {
  }
  getEntertainmentNews() {

      this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
      this.enews = data.articles; 
      },
      );
    
}
getsportsNews() {

  this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
  this.snews = data.articles; 
  },
  );

}

getNews() {

  this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
  this.news = data.articles; 
  },
  );

}
}
