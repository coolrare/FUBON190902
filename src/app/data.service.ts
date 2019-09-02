import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  loadData() {
    return fetch('/api/articles.json')
            .then((res) => {
              return res.json();
            });
  }
}
