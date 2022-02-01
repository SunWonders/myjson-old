import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';
import { GetService } from './get.service';

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

  constructor(private getService:GetService) { 
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

      }
    }
  }

  ngOnInit(): void {
    
  }

  submit(){
    console.log("submit data ",this.editor.get());
    this.getService.post(this.editor.get()).subscribe((data:any) => {
      
      this.generatedUrl=data.data.url;
      console.log("get api response ", this.generatedUrl);
    }, err => {
     console.log(err)
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

  

}
