import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';
  data: any = {};

  ngOnInit(): void {
    fetch('/api/articles.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.data = data;
    });
  }
  confirmInput(str: string) {
    this.keyword = str;
  }
  cancelInput() {
    this.keyword = '';
  }
}
