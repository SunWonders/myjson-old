import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';
import { environment } from 'src/environments/environment';
import { HomeService } from '../home/home.service';
import { PostService } from './post.service';
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
  id: string="";

  constructor(private postService:PostService,private route: ActivatedRoute,private homeService:HomeService) { 

   this.requestEditorBuildOptions();
   this.responseEditorBuildOptions();
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => 
    {
      if(params['id']!=undefined)
      {
        console.log(params['id']);
        this.id=params['id'];
        this.search(this.id)
      }
      
    });
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

    this.isJsonValid=false;
    this.buttonText="Please wait...";
    this.postService.post(this.requestEditor.get(),this.responseEditor.get(),this.id).subscribe((data:any) => {
      
      this.generatedUrl=data.generatedUrl;
      console.log("get api response ", this.generatedUrl);
      this.buttonText="Upload";
     
    }, err => {
     console.log(err);
     this.buttonText="Upload";
    });

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

  search(searchData:any){

    this.homeService.post(searchData).subscribe((data:any) => {
      console.log("search api response ", data);
      this.responseData=data.responseBody;
      this.requestData=data.requestBody;
      this.generatedUrl=environment.baseUrl+searchData;
    }, err => {
     console.log(err);
    
    });

  }


}
