import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AcudienteModel } from 'src/app/models/acudiente.model';
import { AcudienteService } from 'src/app/services/acudiente.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-acudientes-crear',
  templateUrl: './acudientes-crear.component.html',
  styleUrls: ['./acudientes-crear.component.scss'],
})
export class AcudientesCrearComponent  implements OnInit {
  idAlumno:number;

  acudienteInser:AcudienteModel = new AcudienteModel();

  formAcudiente = new FormGroup({
    nombres: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required,Validators.email]),
    tipoDocumento: new FormControl('',[Validators.required]),
    numeroDocumento: new FormControl('',[Validators.required]),
    parentesco: new FormControl('',[Validators.required]),
    telefono: new FormControl('',[Validators.required]),
    esPrincipal: new FormControl(true,[Validators.required]),





  });

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private acudienteService :AcudienteService,
    private alumnoService:AlumnoService,
    private toastController: ToastController
  ) { }

  ngOnInit() {

    this.idAlumno = this.route.snapshot.params['idAlumno'];
    this.acudienteInser.esPrincipal=false;
  }

  onSaveAcudiente(){
    console.log("onSaveAcudiente")
    console.log(this.formAcudiente.value);

    this.acudienteService.postAcudienteByAlumnoId(this.formAcudiente.value,this.idAlumno).subscribe({
      next : async (data) => {
        console.log(data)
        const toast = await this.toastController.create({
          message: 'Alumno Editado!',
          duration: 1500,
          position: 'top'
        });
        await toast.present();
        this.router.navigate(['Acudiente/',this.idAlumno,'Alumno'])
      },
      error : async (err) => {
        console.log(err)
      }
    })
  
  }


}
