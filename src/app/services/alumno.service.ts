import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlumnoModel } from '../models/alumno.model';
import { async } from '@angular/core/testing';
import { link } from 'fs';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  URL_BASE:string =environment.url;
  recodList:AlumnoModel[]=[];

  constructor(
    private http:HttpClient
  ) { }

   getAlumnosAsync = async () : Promise<AlumnoModel[]> => {
    const list = await fetch(`${this.URL_BASE}/alumnos`);
    return list.json();
  }

   getAlumnos(){

    var s = {
      "offset": 0,
      "limit": 8,
      "skip": 0,
      "order": "nombres"

    }
    const strin = JSON.stringify(s)
    console.log(strin)

    console.log( new URLSearchParams(strin));
    console.log(new URLSearchParams(strin).toString())

    return this.http.get<AlumnoModel[]>(`${this.URL_BASE}/alumnos?filter=${strin}`);



  }


  postAlumnos = async (a : any) : Promise<AlumnoModel> => {

    const result = await fetch(`${this.URL_BASE}/alumnos`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
    });
    return result.json();


  }


}
