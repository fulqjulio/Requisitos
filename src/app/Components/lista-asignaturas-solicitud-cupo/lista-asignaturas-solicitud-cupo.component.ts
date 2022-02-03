import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-lista-asignaturas-solicitud-cupo',
  templateUrl: './lista-asignaturas-solicitud-cupo.component.html',
  styleUrls: ['./lista-asignaturas-solicitud-cupo.component.scss']
})
export class ListaAsignaturasSolicitudCupoComponent implements OnInit {

  public ListaAsignaturaSolicitud: ListaAsignaturasSolicitudI[];

  constructor(public service: LoginService, public router: Router) { 
    this.ListaAsignaturaSolicitud = []
    this.service.getListaAsignaturasSolicitud().subscribe(res => {
      this.ListaAsignaturaSolicitud = res.message as ListaAsignaturasSolicitudI[];
    });
  }

  ngOnInit(): void {
  }

  summit(codigo:any){
    this.service.setCurrentAsignatura(codigo)
    this.router.navigate(["DetalleAsignaturaDocentes"])
  }
  
  Back() {
    this.router.navigate(["Home"])
  }
}

interface ListaAsignaturasSolicitudI{
  codigo_asignatura: string,
  nombre: string
}