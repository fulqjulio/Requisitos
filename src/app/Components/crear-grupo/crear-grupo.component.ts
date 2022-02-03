import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./crear-grupo.component.scss']
})
export class CrearGrupoComponent implements OnInit {

  id_docente = new FormControl();
  numero_grupo = new FormControl();
  numero_de_cupos = new FormControl();
  salon = new FormControl();

  constructor(private modal:NgbModal, public router: Router, public service: LoginService) { }

  ngOnInit(): void {
  }

  summit(contenido:any){
    const body: GrupoI = {
      codigo_asignatura: this.service.getCurrentAsignatura(),
      id_docente: this.id_docente.value,
      numero_grupo: this.numero_grupo.value,
      numero_de_cupos: this.numero_de_cupos.value,
      salon: this.salon.value,
    }
    this.service.postCrearGrupo(body).subscribe()
    this.open(contenido)
  }

  Back(){
    this.router.navigate(['DetalleListaAsignaturasDepartamento'])
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}

interface GrupoI{
  codigo_asignatura: string,
  id_docente: string,
  numero_grupo: string,
  numero_de_cupos: number,
  salon: string
}