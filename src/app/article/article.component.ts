import { Component, OnInit, Input } from '@angular/core';
import { Articles } from '../articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item: Articles;

  constructor() { }

  ngOnInit() {
  }

}
