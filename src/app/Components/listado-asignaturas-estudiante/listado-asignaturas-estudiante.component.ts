import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaAsignaturasEstudianteI } from 'src/app/Interfaces/ListaAsignaturasEstudiante.interface';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-listado-asignaturas-estudiante',
  templateUrl: './listado-asignaturas-estudiante.component.html',
  styleUrls: ['./listado-asignaturas-estudiante.component.scss']
})
export class ListadoAsignaturasEstudianteComponent implements OnInit {

  public ListaAsignaturasEstudiante: ListaAsignaturasEstudianteI[];

  constructor(public service: LoginService, public router: Router) {
    this.ListaAsignaturasEstudiante = [];
    this.service.getListaAsignaturasEstudiante(this.service.getUserId(),"2021-2").subscribe(res => {
      this.ListaAsignaturasEstudiante = res.message as ListaAsignaturasEstudianteI[];
    });
  }

  ngOnInit(): void {
  }

  Back() {
    this.router.navigate(["Home"])
  }

  calificacionNull(calificacion:any){
    if (calificacion){
      return calificacion
    }
    else {
      return "Sin calificar"
    }
  }

}
