import { element } from 'protractor';
import { Component, OnChanges, Input } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let frequentWords;
let data: Element[] = [];

@Component({
  selector: 'app-frequent-words-output',
  templateUrl: './frequent-words-output.component.html',
  styleUrls: ['./frequent-words-output.component.css']
})
export class FrequentWordsOutputComponent implements OnChanges {
  @Input() frequentWords: any;

  displayedColumns = ['word', 'frequency'];
  dataSource = new TableDataSource();
  constructor() { }

  ngOnChanges() {
    frequentWords = this.frequentWords;
    this.dataSource = new TableDataSource();
  }
}

export interface Element {
  word: string;
  frequency: number;
}


export class TableDataSource extends DataSource<any> {
  connect(): Observable<Element[]> {
    data = [];    
    frequentWords.output.topOccurence.forEach(ele => {
      data.push({ word: ele[0], frequency: ele[1] });
    });
    return Observable.of(data);
  }
  disconnect() { }
}