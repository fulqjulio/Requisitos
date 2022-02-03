import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ListaGruposVinculadosI } from 'src/app/Interfaces/ListaGruposVinculados.interface';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-detalle-asignatura-departamento',
  templateUrl: './detalle-asignatura-departamento.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./detalle-asignatura-departamento.component.scss']
})
export class DetalleAsignaturaDepartamentoComponent implements OnInit {

  Asignatura: AsignaturaI[];
  en_oferta: string;
  ListaGruposVinculados: ListaGruposVinculadosI[];

  constructor(private modal:NgbModal, public router: Router, public service: LoginService) {
    this.Asignatura = []
    this.en_oferta = ''
    this.service.getBuscarAsignatura(this.service.getCurrentAsignatura()).subscribe(res => {
      this.Asignatura = res.message as AsignaturaI[];
      this.Asignatura[0]['en_oferta'] == 1 ? this.en_oferta = "disabled" : this.en_oferta='';
    });
    this.ListaGruposVinculados = [];
    this.service.getListaGruposVinculados(this.service.getCurrentAsignatura()).subscribe(res => {
      this.ListaGruposVinculados = res.message as ListaGruposVinculadosI[];
    });
   }

  ngOnInit(): void {
  }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }

  definirHorario(id_grupo:any){
    this.service.setCurrentGrupo(id_grupo)
    this.router.navigate(['DefinirHorario'])
  }

  crearGrupo(){
    this.router.navigate(['CrearGrupo'])
  }

  Back() {
    this.router.navigate(['ListaAsignaturasDepartamento'])
  }
}

interface AsignaturaI {
  nivel: string,
  departamento: string,
  nombre: string,
  codigo: string,
  horas_actividad_presencial: number,
  horas_actividad_autonomas: number,
  plan_de_estudios: string,
  validable: number,
  porcentaje_de_asistencia: string,
  tipologia: string,
  contenido: string,
  en_oferta: number
}