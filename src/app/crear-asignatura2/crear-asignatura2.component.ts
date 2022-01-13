import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crear-asignatura2',
  templateUrl: './crear-asignatura2.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./crear-asignatura2.component.scss']
})
export class CrearAsignatura2Component implements OnInit {

  constructor(private modal:NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

  get requisitos(){
    return this.form.get('requisitos') as FormArray;
  }

  agregarRequisito(){
    const requisitosFormGroup = this.formBuilder.group({
      Codigo: '',
      Tipo: ''
    });
    this.requisitos.push(requisitosFormGroup);
  }

  removerRequisito(index:number){
    this.requisitos.removeAt(index)
  }

  refresh(){
    this.requisitos.controls.splice(0, this.requisitos.length);
  }

  form = this.formBuilder.group({
    requisitos: this.formBuilder.array([])
  })
}
