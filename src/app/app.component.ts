import { Component,OnDestroy,OnInit } from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'my-json';
  headerData:string="";

  // constructor() { 
  //   this.headerData="Upload Your JSON and Make a GET API URI Ready within seconds";
  // }

 ngOnInit(): void {
   let tempHeader=localStorage.getItem("headerData");
   if(tempHeader!=null)
   {
     this.headerData=tempHeader.toString();
   }
    
  }

  displayDescription(type:string) {
    //console.log("type",type)
    if(type.toString().includes("get"))
    {
      type="get";
    }
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
      case "home":{
        this.headerData="Search your API by Generated URI or ID";
        break;
      }
      default:{
        this.headerData="Coming Soon";
        break;
      }
    }
    localStorage.setItem("headerData",this.headerData.toString());
  }


  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    //console.log("is mobile"+ this.mobileQuery)
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.headerData="Upload Your JSON and Make a GET API URI Ready within seconds";
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


 
}
