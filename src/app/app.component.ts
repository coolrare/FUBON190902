import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';

  confirmInput(str: string) {
    this.keyword = str;
  }
  cancelInput() {
    this.keyword = '';
  }
}
