import { Component, OnInit } from '@angular/core';
import { samplebooks } from '../../assets/books';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-grid.component.scss']
})
export class BooksGridComponent implements OnInit {

  constructor() { }

  public gridData: any[] = samplebooks;

  ngOnInit() {
  }

}
