import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaGruposVinculadosI } from 'src/app/Interfaces/ListaGruposVinculados.interface';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-lista-grupos-vinculados',
  templateUrl: './lista-grupos-vinculados.component.html',
  styleUrls: ['./lista-grupos-vinculados.component.scss']
})
export class ListaGruposVinculadosComponent implements OnInit {

  public ListaGruposVinculados: ListaGruposVinculadosI[];

  constructor(public service: LoginService, public router: Router) {
    this.ListaGruposVinculados = [];
    this.service.getListaGruposVinculados(this.service.getCurrentAsignatura()).subscribe(res => {
      this.ListaGruposVinculados = res.message as ListaGruposVinculadosI[];
    });
   }

  ngOnInit(): void {
  }

  ingresoManual(grupo_id:any){
    this.service.setCurrentGrupo(grupo_id)
    this.router.navigate(['IngresoManualCalificaciones'])
  }

  importar(){
    this.router.navigate(['ImporteCalificaciones'])
  }

  Back() {
    this.router.navigate(["IngresarCalificaciones"])
  }

}
