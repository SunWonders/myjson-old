import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';
import { environment } from 'src/environments/environment';
import { GetService } from '../get/get.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  isEnabled:boolean= environment.isPostEnabled;

  public generatedUrl:any;
  public requestEditorOptions: JsonEditorOptions=new JsonEditorOptions();
  public responseEditorOptions: JsonEditorOptions=new JsonEditorOptions();
  public requestData: any;
  public responseData: any;
  @ViewChild("requestEditor")
  requestEditor!: JsonEditorComponent;
  @ViewChild("responseEditor")
  responseEditor!: JsonEditorComponent;

  isJsonValid:boolean=false;
  public buttonText:string="Upload";

  constructor(private getService:GetService) { 

   this.requestEditorBuildOptions();
   this.responseEditorBuildOptions();
    
  }

  ngOnInit(): void {
    
  }

  requestEditorBuildOptions(){
    this.requestEditorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.requestEditorOptions.mode = 'code'; //set only one mode
    this.requestData = {};
    this.requestEditorOptions.statusBar = false;
    this.requestEditorOptions.onChange = () => 
    {
      try{
        console.log("request editor ",this.requestEditor.get());
        this.isJsonValid=this.checkJsonValid(this.requestEditor.get());
      }catch(e){
        this.isJsonValid=false;
      }
    }
  }

  responseEditorBuildOptions(){
    this.responseEditorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.responseEditorOptions.mode = 'code'; //set only one mode
    this.responseData={};
    this.responseEditorOptions.statusBar = false;
    this.responseEditorOptions.onChange = () => 
    {
      try{
        console.log("response editor ",this.responseEditor.get());
        this.isJsonValid=this.checkJsonValid(this.responseEditor.get());
      }catch(e){
        this.isJsonValid=false;
      }
    }
  }

  submit(){
    console.log("request data ",this.requestEditor.get());
    console.log("response data ",this.responseEditor.get());
    //this.isJsonValid=false;
    //this.buttonText="Please wait...";

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


}
