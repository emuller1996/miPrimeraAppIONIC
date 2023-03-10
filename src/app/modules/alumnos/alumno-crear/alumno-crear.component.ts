import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno-crear',
  templateUrl: './alumno-crear.component.html',
  styleUrls: ['./alumno-crear.component.scss'],
})
export class AlumnoCrearComponent  implements OnInit {

  alumno:AlumnoModel = new AlumnoModel();
  nombre:string;

  formAlumno = new FormGroup({
    nombres : new FormControl('',[Validators.required]),
    apellidos : new FormControl('',[Validators.required]),
    correo : new FormControl('',[Validators.required,Validators.email]),
    tipoDocumento : new FormControl('',[Validators.required]),
    numeroDocumento : new FormControl('',[Validators.required]),
    genero : new FormControl('',[Validators.required]),
    fechaNacimiento : new FormControl('',[Validators.required]),
    departamentoNacimiento : new FormControl('',[Validators.required]),
    ciudadNacimiento : new FormControl('',[Validators.required]),
    direccionResidencia : new FormControl('',[Validators.required]),
    barrioResidencia : new FormControl('',[Validators.required]),
    telefono : new FormControl('',[Validators.required])
  });

  constructor(
    private alumnoService : AlumnoService,
    private router :Router,
    private toastController: ToastController
  ) { }





  ngOnInit() {}






  onSaveAlumno():void {

    let date = new Date();
    console.log(date.toISOString());

    console.log(this.formAlumno.value);
    this.alumnoService.postAlumnos(this.formAlumno.value)
      .then(data => {
          console.log(data);
          this.router.navigate(['/Alumnos/Lista'])
          const toast =  this.toastController.create({
            message: 'Alumno Creado Correctamente .',
            duration: 1500,
            position: 'top'
          });

          toast.then(data => data.present());

      })
      .catch( err => console.log(err));





  }

}
