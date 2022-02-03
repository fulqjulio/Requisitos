import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { ListaAsignaturasDocenteI } from 'src/app/Interfaces/ListaAsignaturasDocente.interface';

@Component({
  selector: 'app-ingresar-calificaciones',
  templateUrl: './ingresar-calificaciones.component.html',
  styleUrls: ['./ingresar-calificaciones.component.scss']
})
export class IngresarCalificacionesComponent implements OnInit {

  public ListaAsignaturasDocente: ListaAsignaturasDocenteI[];

  constructor(public service: LoginService, public router: Router) {
    this.ListaAsignaturasDocente = [];
    this.service.getListaAsignaturasDocente(this.service.getUserId()).subscribe(res => {
      this.ListaAsignaturasDocente = res.message as ListaAsignaturasDocenteI[];
    });
   }

  ngOnInit(): void {
  }

  Back() {
    this.router.navigate(["Home"])
  }

  Link(asignatura:any){
    this.service.setCurrentAsignatura(asignatura);
    this.router.navigate(['ListaGruposVinculados'])
  }
}
