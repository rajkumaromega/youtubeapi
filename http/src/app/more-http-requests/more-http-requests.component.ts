import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-http-requests',
  templateUrl: './more-http-requests.component.html',
  styleUrls: ['./more-http-requests.component.css']
})
export class MoreHttpRequestsComponent implements OnInit {
  loading: boolean = false;
  http: any;
  data: any;

  constructor() { }
  makePost(): void{
      this.loading= true;
      this.http.post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body:'bar',
          title: 'foo',
          userid: 1
        })
      )
      .subscribe((data: any) =>{
        this.data = data;
        this.loading = false;
      });
  }
  ngOnInit(): void {
   
  }

}
