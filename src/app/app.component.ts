import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Articles } from './articles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = 'demo1';
  data: Articles[] = [];

  constructor(private datasvc: DataService) { }

  ngOnInit(): void {
    this.datasvc.loadData()
    .subscribe((data) => {
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
