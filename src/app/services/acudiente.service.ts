import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AcudienteModel } from '../models/acudiente.model';


@Injectable({
  providedIn: 'root'
})
export class AcudienteService {

  URL_BASE:string =environment.url;

  constructor(
    private http:HttpClient
  ) { }


  getAcudienteByAlumnoId(id:number){

    return this.http.get<AcudienteModel[]>(`${this.URL_BASE}/alumnos/${id}/acudientes`);
  }


  postAcudienteByAlumnoId(acudiente:any,alumnoID:number){

    return this.http.post<AcudienteModel>(`${this.URL_BASE}/alumnos/${alumnoID}/acudientes`,acudiente);
  }
}
