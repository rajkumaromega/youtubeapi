import { HttpClient ,HttpRequest,HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { SearchResult } from '../search-result/search-result.model';

export const YOUTUBE_API_KEY = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
@Injectable()
export class YouTubeSearchService{
  
    constructor(
        

        private http: HttpClient,
        @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiUrl: string
    ){}
    search(query: string): Observable<SearchResult[]>{
        const params: string = [        //to know entire params variable here refer yt api docs
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');
        const queryUrl = `${this.apiUrl}?${params}`;    //concatnating api url and params
        return this.http.get(queryUrl).map((response  => {  //we are requesting our query since httpClient can do any kind of request POST<GET<DELETE.
            //we take return value of http.get and use map to get response from the request 
            //from that response we extract the body as an object using .json() and then we iterate over each item 
            //and convert it to a searchResult.
            return<any>response['items'].map((item: { id: { videoId: any; }; snippet: { title: any; description: any; thumbnail: { high: { url: any; }; }; }; }) =>{ 

                return new SearchResult({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnail.high.url
                });
            });
            //console.log("raw item", item);
        })

    }
}

