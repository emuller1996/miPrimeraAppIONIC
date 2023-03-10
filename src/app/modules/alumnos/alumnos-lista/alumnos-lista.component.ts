import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss'],
})
export class AlumnosListaComponent  implements OnInit {
  public folder!: string;
  listaAlumnos! : AlumnoModel[];
  listaAlumnoAsync! : AlumnoModel [];


  constructor(
    private alumnoService: AlumnoService,

  ) { }

  ngOnInit() {
    /* this.alumnoService.getAlumnos().then(data=> this.listaAlumnos = data );
    console.log(this.listaAlumnos) */
    this.getAllAlumnos();

  }



  async getAllAlumnos(){


      this.alumnoService.getAlumnos().subscribe({
        next : (data ) => {
          this.listaAlumnos = data
        },
        error : (error) => { console.error(error)}
      })


     const result = await this.alumnoService.getAlumnosAsync();
     console.log(result);
     this.listaAlumnoAsync =result
  }




}
