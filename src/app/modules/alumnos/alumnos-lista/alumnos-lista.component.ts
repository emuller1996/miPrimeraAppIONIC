import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.scss'],
})
export class AlumnosListaComponent  implements OnInit {
  public folder!: string;
  listaAlumnos! : Observable <AlumnoModel[]>;


  constructor(
    private alumnoService: AlumnoService,
  ) { }

  ngOnInit() {
    this.alumnoService.getAlumnos().then(data=> this.listaAlumnos = data );
    console.log(this.listaAlumnos)
  }

}
