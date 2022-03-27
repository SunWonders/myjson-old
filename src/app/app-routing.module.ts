import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { GetComponent } from './get/get.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PutComponent } from './put/put.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'get', component: GetComponent },
  { path: 'post', component: PostComponent },
  { path: 'put', component: PutComponent },
  { path: 'delete', component: DeleteComponent },
  { path: '', component: GetComponent },
  {path: 'get/:id', component: GetComponent },
  {path: 'post/:id', component: PostComponent },
  {path: 'put/:id', component: PutComponent },
  { path: '**', redirectTo: '/get', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
