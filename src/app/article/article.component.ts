import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Articles } from '../articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item: Articles;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }

}
