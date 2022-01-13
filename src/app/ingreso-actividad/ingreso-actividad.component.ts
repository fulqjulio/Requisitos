import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ingreso-actividad',
  templateUrl: './ingreso-actividad.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./ingreso-actividad.component.scss']
})
export class IngresoActividadComponent implements OnInit {

  constructor(private modal:NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

  get actividades(){
    return this.form.get('actividades') as FormArray;
  }

  agregarActividad(){
    const actividadesFormGroup = this.formBuilder.group({
      Nombre: '',
      Porcentaje: ''
    });
    this.actividades.push(actividadesFormGroup);
  }

  removerActividad(index:number){
    this.actividades.removeAt(index)
  }

  refresh(){
    this.actividades.controls.splice(0, this.actividades.length);
  }

  form = this.formBuilder.group({
    actividades: this.formBuilder.array([])
  })
}
