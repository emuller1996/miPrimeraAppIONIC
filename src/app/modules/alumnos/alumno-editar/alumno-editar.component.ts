import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-editar',
  templateUrl: './alumno-editar.component.html',
  styleUrls: ['./alumno-editar.component.scss'],
})
export class AlumnoEditarComponent  implements OnInit {

  idAlumno:number;

  alumnoUpdate: AlumnoModel;


  constructor(
    private route: ActivatedRoute,
    private router :Router,
    private alumnoService: AlumnoService,
    private toastController: ToastController
  ) { }

  ngOnInit(

  ) {

    this.idAlumno= this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
    this.alumnoService.getAlumnoById(this.idAlumno).subscribe(data=>{
      console.log(data)
      this.alumnoUpdate =data;
    })
  }


  onUpdateAlumno(){

    console.log(this.alumnoUpdate);
    this.alumnoUpdate.id= 0;
    this.alumnoService.putAlumno(this.alumnoUpdate,this.idAlumno).subscribe({
      next : async ( data) => {
          console.log(data)
          const toast = await this.toastController.create({
            message: 'Alumno Editado!',
            duration: 1500,
            position: 'top'
          });
          await toast.present();
          this.router.navigate(['/Alumnos/Lista'])
      },
      error : ( err ) => { console.error(err)}
    })

  }
}
