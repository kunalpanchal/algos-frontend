import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// const HOST: any = 'http://52.89.8.131:3000/';
const HOST: any = 'http://localhost:3000/';

@Component({
  selector: 'app-frequent-words',
  templateUrl: './frequent-words.component.html',
  styleUrls: ['./frequent-words.component.css']
})

export class FrequentWordsComponent {
  public n: number = 5;
  public frequentWords: any;
  private url: string = `${HOST}get-frequent-words`;
  
  constructor(private http: HttpClient) { }

  getOutput(mode?: string): void {
    let url = `${this.url}?input=${this.n || ''}`;
    if (mode === 'faster')
      url += `&useRedis=true`;
    this.http.get(url).subscribe(data => {
      this.frequentWords = data;
    });
  }
}
