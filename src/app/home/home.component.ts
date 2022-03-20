import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isEnabled:boolean= environment.isHomeEnabled;
  searchData:any;

  constructor(private homeService:HomeService,private route:Router,private _snackBar: MatSnackBar) { 
  
  }

  ngOnInit(): void {
    
  }

  search(){
    console.log("search data ",this.searchData);
    this.homeService.post(this.searchData).subscribe((data:any) => {
    
      console.log("search api response ", data);
      this.route.navigate(["/get",data.id]);
    
    }, err => {
     console.log(err);
     this.openSnackBar("No Data Found ","OK");
    
    });

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  

}
