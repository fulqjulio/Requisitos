import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-lista-asignaturas-departamento',
  templateUrl: './lista-asignaturas-departamento.component.html',
  styleUrls: ['./lista-asignaturas-departamento.component.scss']
})
export class ListaAsignaturasDepartamentoComponent implements OnInit {

  public ListaAsignaturasDepartamento: ListaAsignaturasDepartamentoI[];

  constructor(public service: LoginService, public router: Router) { 
    this.ListaAsignaturasDepartamento = []
    this.service.getListaAsignaturasDepartamento().subscribe(res => {
      this.ListaAsignaturasDepartamento = res.message as ListaAsignaturasDepartamentoI[];
    });
  }

  ngOnInit(): void {
  }

  summit(codigo:any){
    this.service.setCurrentAsignatura(codigo)
    this.router.navigate(["DetalleListaAsignaturasDepartamento"])
  }
  
  Back() {
    this.router.navigate(["Home"])
  }

}

interface ListaAsignaturasDepartamentoI{
  codigo: string,
  nombre: string
}
