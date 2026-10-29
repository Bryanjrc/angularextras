import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // <--- Importante para la API de ficheros[cite: 31]
import { FormsModule } from '@angular/forms';            // <--- Si utilizas ngForm en tus formularios[cite: 20, 21]

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { UploadFileComponent } from './components/upload-file-component/upload-file-component';
import { ServiceFiles } from './services/service.files';

@NgModule({
  declarations: [
    App, 
    HomeComponent, 
    MenuComponent, 
    UploadFileComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule // 
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(), 
    ServiceFiles       
  ],
  bootstrap: [App],
})
export class AppModule {}