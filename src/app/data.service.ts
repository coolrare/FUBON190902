import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articles } from './articles';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  loadData() {
    return this.http.get<Articles[]>('/api/articles.json');
  }
}
