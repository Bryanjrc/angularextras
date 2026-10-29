import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { FileModel } from '../models/filemodel';

@Injectable()
export class ServiceFiles {
    private urlApi: string;

    constructor(private _http: HttpClient) {
        this.urlApi = 'https://apipostfiles.azurewebsites.net/';
    }

    async uploadFileAsync(fileModel: FileModel): Promise<any> {
        let json = JSON.stringify(fileModel);
        let headers = new HttpHeaders().set('content-type', 'application/json');
        let request = 'api/testingfiles'; // O el endpoint que indique Swagger

        return firstValueFrom(
            this._http.post(this.urlApi + request, json, { headers: headers })
        );
    }
}