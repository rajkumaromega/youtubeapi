import { Component, EventEmitter, OnInit, Output, ElementRef } from '@angular/core';
import { from, Observable ,fromEvent } from 'rxjs';



import { SearchResult } from '../search-result/search-result.model';
import { YouTubeSearchService } from '../you-tube-search/you-tube-search.service';


@Component({
  selector: 'app-search-box',
  template: `<input type="text" class="form-control" placeholder="search" autofocus>`,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit { // ngOnInit willl be calld after first change detection 
      //ngonInit is a good place to do intiliazation 
  @Output() loading:  EventEmitter<boolean> = new EventEmitter<boolean>(); //emit  a boolean when search is loading
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>(); // emit an array of searchresults when the search is finsished
  constructor( private youtube: YouTubeSearchService,
              private el:ElementRef){ 
      
      
      //elementref is an angular wrapper around native element
      // el is object of type ElementRef
      // set both as a instance injected variables
  }
     

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement,'keyup') //el.nativeElement is native Dom element this component is attached to
    // keyup is the name of the event we want to turn into a stream
    // in event "this" refers to the element the event refers to

    .map((e:any) => e.target.value)
    .filter((text: string)=> text.length >1)
    .debounceTime(250)
    .do(()=> this.loading.emit(true))//do(() => this.loading.emit(true))  now we have debounceTime,enough characters so make loading = true
    // using do on a steam is a way to perform a function mid-stream for each event
    .map((query:string)=> this.youtube.search(query))
    .switch()//.switch() // we saying ignore all search events but the most recent if the new search comes we want to use new search


    .subscribe(
      (results: SearchResult[])=> {
        this.loading.emit(false);  //on success
        this.results.emit(results); ///emits an event containing list of results
      },
      (err:any)=> {
        this.loading.emit(false); //on error
      },
      ()=>{
        this.loading.emit(false); //on completion 
      }
    ) ; 
  
  }  

}
