import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { youTubeSearchInjectables} from './you-tube-search/you-tube-search.injectables'
import { from } from 'rxjs';
import { SearchBoxComponent } from './search-box/search-box.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';
@NgModule({
  declarations: [
    
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    MoreHttpRequestsComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [youTubeSearchInjectables], // to use it through out our app
  bootstrap: [AppComponent , HttpClientModule]
})
export class AppModule { }
