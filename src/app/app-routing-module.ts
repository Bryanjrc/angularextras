import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { UploadFileComponent } from './components/upload-file-component/upload-file-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "uploadfile", component: UploadFileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
