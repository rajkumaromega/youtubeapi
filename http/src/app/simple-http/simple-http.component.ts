import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {

  data: Object | undefined; // data  is for  api return value 
 // data  is for  api return value 
 // data  is for  api return value 
  // data  is for  api return value 
  loading: boolean | undefined; // loading indicator 
  // loading indicator 

  constructor( private http: HttpClient) { } //if we define public instead of private we give this.http as a variable for http

  makeRequest():void{
    this.loading = true; // this will turn on loading indicator in our view
    this.http.get('https://jsonplaceholder:typicode:com/posts/1') // to which we want to make get request
    .subscribe(data => {    //subscribe is for changes from response of request 
      this.data= data;      //we exact response object using json and set this.data to the exacted object
      this.loading= false;   // we are not loading anymore so setting this.loading to false
    });
  }

  ngOnInit(): void {}

}
