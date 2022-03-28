import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';
import { GetService } from './get.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HomeService } from '../home/home.service';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  public generatedUrl:any;
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, { static: false })
  editor!: JsonEditorComponent;
  isJsonValid:boolean=false;
  public buttonText:string="Upload";
  id: string="";

  constructor(private getService:GetService,private route: ActivatedRoute,private homeService:HomeService,private _snackBar: MatSnackBar) { 
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'code'; //set only one mode
    this.data = {}
    this.editorOptions.statusBar = false;
    this.editorOptions.onChange = () => 
    {
      try{
        this.isJsonValid=this.checkJsonValid(this.editor.get());
      }catch(e){
        this.isJsonValid=false;
      }
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => 
    {
      if(params['id']!=undefined)
      {
        //console.log(params['id']);
        this.id=params['id'];
        this.search(this.id)
      }
      
    });
  }

  submit(){
    //console.log("submit data ",this.editor.get());
    this.isJsonValid=false;
    this.buttonText="Please wait...";
    this.getService.post(this.editor.get(),this.id).subscribe((data:any) => {
      
      this.generatedUrl=data.generatedUrl;
      //console.log("get api response ", this.generatedUrl);
      this.buttonText="Upload";
      this.isJsonValid=this.checkJsonValid(this.editor.get());
    }, err => {
    // //console.log(err);
     this.buttonText="Upload";
     this.isJsonValid=this.checkJsonValid(this.editor.get());
     this.openSnackBar("Oops Some Error Occured !! Please try again ","OK");

    });
  }

  checkJsonValid(jsonData:any)
  {
    try {
      JSON.parse(JSON.stringify(jsonData));
      return true;
    } catch (e) {
      return false;
    }
    
  }


  search(searchData:any){

    this.homeService.post(searchData).subscribe((data:any) => {
      //console.log("search api response ", data);
      this.data=data.responseBody;
      this.generatedUrl=environment.baseUrl+searchData;
    }, err => {
     ////console.log(err);
     this.openSnackBar("Oops Some Error Occured !! Please try again ","OK");

    });

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  

}
