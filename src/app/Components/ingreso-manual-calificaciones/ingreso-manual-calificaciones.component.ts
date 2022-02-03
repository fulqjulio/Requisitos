import { identifierName } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-ingreso-manual-calificaciones',
  templateUrl: './ingreso-manual-calificaciones.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ingreso-manual-calificaciones.component.scss']
})
export class IngresoManualCalificacionesComponent implements OnInit {

  public Calificaciones: CalificacionesI[];
  public Actividades: ActividadesI[];

  constructor(private modal: NgbModal, public service: LoginService, public router: Router, private formBuilder: FormBuilder) {

    this.Calificaciones = [];
    this.service.getCalificaciones(this.service.getCurrentGrupo()).subscribe(res => {
      this.Calificaciones = res.message as CalificacionesI[];
    });

    this.Actividades = [];
    this.service.getActividades(this.service.getCurrentGrupo(), this.service.getCurrentAsignatura()).subscribe(res => {
      this.Actividades = res.message as ActividadesI[];
    });
  }

  get calificaciones(){
    return this.registerForm.get('calificaciones') as FormArray;
  }

  registerForm = this.formBuilder.group({
    identicicacion: '',
    calificacion: '',
    id_actividad: ''
  });

  ngOnInit(): void {
  }

  open(contenido: any) {
    this.modal.open(contenido, { size: 'sm', centered: true });
  }

  open2(contenido: any) {
    this.modal.open(contenido, { size: 'xl', centered: true });
  }

  loadControls(estudiantes:any, actividades:any){
    
  }
  
  Back(){
    this.router.navigate(['ListaGruposVinculados'])
  }

  toArray(calificaciones:string){
    return calificaciones.split(',')
  }
}

class CalificacionesI {
  identificacion: string = "";
  nombre_completo: string = "";
}

interface ActividadesI {
  id: number,
  nombre: String,
  porcentaje: String
}
