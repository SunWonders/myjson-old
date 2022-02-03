import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  isEnabled:boolean= environment.isDeleteEnabled;

  
  constructor() { }

  ngOnInit(): void {
  }

}
