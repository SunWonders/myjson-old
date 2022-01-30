import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-json';
  headerData:string="";

  constructor() { 
    this.headerData="Upload Your JSON and Make a GET API URI Ready within seconds";
  }

 ngOnInit(): void {
    
  }

  displayDescription(type:string) {
    switch(type){
      case "get":{
        this.headerData="Upload Your JSON and Make a GET API URI Ready within seconds";
        break;
      }
      case "post":{
        this.headerData="Upload Your JSON and Make a POST API URI Ready within seconds";
        break;
      }
      case "delete":{
        this.headerData="Upload Your JSON and Make a DELETE API URI Ready within seconds";
        break;
      }
      case "put":{
        this.headerData="Upload Your JSON and Make a PUT API URI Ready within seconds";
        break;
      }
      default:{
        this.headerData="Coming Soon";
        break;
      }
    }
  }

 
}
