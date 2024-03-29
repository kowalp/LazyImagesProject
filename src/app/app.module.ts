import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadDirective } from './shared/directive/lazyLoad.directive';
import { GetDataService } from './shared/service/getData.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LazyLoadDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
