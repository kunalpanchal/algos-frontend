import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatInputModule, MatTableModule, MatCardModule } from '@angular/material';


import { AppComponent } from './app.component';
import { FrequentWordsComponent } from './frequent-words/frequent-words.component';
import { FrequentWordsOutputComponent } from './frequent-words/frequent-words-output/frequent-words-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FrequentWordsComponent,
    FrequentWordsOutputComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MatCardModule, MatButtonModule, MatTableModule, MatInputModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
