import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result/search-result.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {
  

  results: SearchResult[]= [];
  loading: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  updateResults(results: SearchResult[]):void{ //updataResults takes new SearchResult[] and sets this.results to the new value

    this.results = results; // set this.results to new value 
    
  }

}
