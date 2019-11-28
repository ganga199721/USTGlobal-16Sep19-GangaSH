import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
news;
inputData;
  constructor(private http: HttpClient) { 
    this. getNews();
  }


  getCountryNews(event) {
this.inputData = event.target.value;
    this.http.get<any>('https://newsapi.org/v2/top-headlines?apiKey=95c1934bb1414bb7bec72ffe4eb951ad&country='+this.inputData).subscribe(data => {
      this.news = data.articles;
    },
    );
    }

getNews() {
this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
this.news = data.articles;
},
);
}
  ngOnInit() {}

}
