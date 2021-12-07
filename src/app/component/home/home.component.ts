import { Component, OnInit } from '@angular/core';
import * as Editor from 'ckeditor5/build/ckeditor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public Editor = Editor;
  ngOnInit(): void {
  }

}
