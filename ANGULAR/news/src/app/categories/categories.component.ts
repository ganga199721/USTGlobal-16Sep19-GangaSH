import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  news;
  inputData;
  constructor(private http: HttpClient) {
    this.getCatNews();
   }

  ngOnInit() {
  }

  getCategoryNews(event) {
  this.inputData = event.target.value;
        this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=95c1934bb1414bb7bec72ffe4eb951ad&category='+this.inputData).subscribe(data => {
      this.news = data.articles;
      
      },
      );
    
 
}
getCatNews() {
this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=Entertainment&apiKey=95c1934bb1414bb7bec72ffe4eb951ad').subscribe(data => {
this.news = data.articles;
},
);
}
}
