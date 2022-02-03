import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  isEnabled:boolean= environment.isPostEnabled;

  constructor() { }

  ngOnInit(): void {

  }

}
