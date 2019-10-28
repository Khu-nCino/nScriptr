import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';
import { SearchOptionsComponent } from './search-options/search-options.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    SearchOptionsComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
	 AppRoutingModule,
	 ColorPickerModule,
	 FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
