import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcudienteModel } from 'src/app/models/acudiente.model';
import { AcudienteService } from 'src/app/services/acudiente.service';

@Component({
  selector: 'app-acudientes-lista',
  templateUrl: './acudientes-lista.component.html',
  styleUrls: ['./acudientes-lista.component.scss'],
})
export class AcudientesListaComponent  implements OnInit {

  idAlumno:number;
  listAcudientes:AcudienteModel[];

  constructor(
    private acudienteService: AcudienteService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.idAlumno = this.route.snapshot.params['idAlumno'];

    this.acudienteService.getAcudienteByAlumnoId(this.idAlumno).subscribe({
      next : (data)=> { 
        console.log(data)
        this.listAcudientes =  data;
      },
      error : (data)=> { console.log(data)}
    })
  }

}
