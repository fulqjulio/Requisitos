import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-modificar-solicitud-asignatura',
  templateUrl: './modificar-solicitud-asignatura.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./modificar-solicitud-asignatura.component.scss']
})
export class ModificarSolicitudAsignaturaComponent implements OnInit {

  nombre_asignatura = new FormControl();
  nivel = new FormControl();
  archivos = new FormControl();
  motivo = new FormControl();

  constructor(private modal:NgbModal, public router: Router, public service: LoginService) { }

  ngOnInit(): void {
  }

  summit(contenido: any) {
    const body: SolicitudI = {
      id_docente: this.service.getUserId(),
      tipo: this.service.getTipoSolicitud(),
      nombre_asignatura: this.nombre_asignatura.value,
      nivel: this.nivel.value,
      archivos: this.archivos.value,
      motivo: this.motivo.value,
    }
    this.service.postSolicitudAsignatura(body).subscribe()
    this.open(contenido)
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

  Back() {
    this.router.navigate(['Home'])
  }
}

interface SolicitudI {
  id_docente: string,
  tipo: string,
  nombre_asignatura: string,
  nivel: string,
  archivos: string,
  motivo: string,
}
