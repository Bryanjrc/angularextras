import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ServiceFiles } from '../../services/service.files';
import { FileModel } from '../../models/filemodel';

@Component({
  selector: 'app-upload-file',
  standalone: false,
  templateUrl: './upload-file-component.html'
})
export class UploadFileComponent {
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajafichero') cajaFichero!: ElementRef;

  public mensaje!: string;

  constructor(
    private _service: ServiceFiles,
    private _cdr: ChangeDetectorRef
  ) {}

  subirFichero(): void {
    let fileName = this.cajaNombre.nativeElement.value;
    let files = this.cajaFichero.nativeElement.files;

    if (files.length === 0) {
      this.mensaje = 'Seleccione un fichero primero';
      return;
    }

    let file = files[0];
    let reader = new FileReader();

    // Evento que se ejecuta al terminar de leer el fichero como Data URL
    reader.onload = async () => {
      // Obtenemos el string base64 completo y extraemos solo los datos puros
      let base64String = reader.result as string;
      let cleanBase64 = base64String.split(',')[1] || base64String;

      let model = new FileModel(fileName, cleanBase64);

      try {
        await this._service.uploadFileAsync(model);
        this.mensaje = 'Fichero subido con éxito a la API';
        this._cdr.detectChanges();
      } catch (error) {
        console.error('Error al subir fichero:', error);
        this.mensaje = 'Error al subir el fichero';
        this._cdr.detectChanges();
      }
    };

    // Leemos el fichero como DataURL (Base64)
    reader.readAsDataURL(file);
  }
}