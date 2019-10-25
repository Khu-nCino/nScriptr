import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { OptionsPanelComponent } from './options-panel/options-panel.component';
import { ResultsPanelComponent } from './results-panel/results-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    OptionsPanelComponent,
    ResultsPanelComponent
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
