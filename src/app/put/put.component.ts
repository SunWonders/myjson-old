import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  isEnabled:boolean= environment.isPutEnabled;
  
  constructor() { }

  ngOnInit(): void {
  }

}
