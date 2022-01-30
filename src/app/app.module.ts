import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { GetComponent } from './get/get.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { PutComponent } from './put/put.component';
import { GetService } from './get/get.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetComponent,
    ComingSoonComponent,
    PostComponent,
    DeleteComponent,
    PutComponent
  ],
  imports: [
    AppRoutingModule,
    NgJsonEditorModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
