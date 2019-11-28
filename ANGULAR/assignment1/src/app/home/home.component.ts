import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Component( {
    selector : 'app-home',
    templateUrl : './home.component.html',
    styleUrls : ['./home.component.css']

})

export class HomeComponent {
    news;

    constructor(private http: HttpClient) {
       this. getNews();

    }
    getCountryNews(value) {
        if (value === 'in') {

            this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
          this.news = data.articles;
          console.log('India');
          },
          );
        }
     if(value=='ru') {

            this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ru&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
          this.news = data.articles;
          console.log('ru');
          },
          );
        }
        if(value=='ua') {
            this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ua&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
          this.news = data.articles;
          console.log('ua');
          },
          );
        }
        if(value=='us') {
            this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
          this.news = data.articles;
          console.log('us');
          },
          );
        }
   }
   getNews() {
   this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
    this.news = data.articles;
},
);
}
}






