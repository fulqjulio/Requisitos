import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaAsignaturasDocenteI } from 'src/app/Interfaces/ListaAsignaturasDocente.interface';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-crear-actividades',
  templateUrl: './crear-actividades.component.html',
  styleUrls: ['./crear-actividades.component.scss']
})
export class CrearActividadesComponent implements OnInit {

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
    this.router.navigate(['IngresoActividad'])
  }
}
