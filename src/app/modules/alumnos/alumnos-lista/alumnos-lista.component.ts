import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class AlumnosListaComponent  implements OnInit,OnDestroy {
  public folder!: string;
  listaAlumnos! : AlumnoModel[];
  listaAlumnoAsync! : AlumnoModel [];


  ionViewWillEnter(){
    console.log("ionViewWillEnter")
    console.log("ngOnInit")

    /* this.alumnoService.getAlumnos().then(data=> this.listaAlumnos = data );
    console.log(this.listaAlumnos) */
    this.getAllAlumnos();
  }

  constructor(
    private alumnoService: AlumnoService,

  ) { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
    this.listaAlumnos=[];
  }

  ngOnInit() {
    

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
