import { Time } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-definir-horario',
  templateUrl: './definir-horario.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./definir-horario.component.scss']
})
export class DefinirHorarioComponent implements OnInit {

  hora_inicio = new FormControl();
  hora_final = new FormControl();

  dias: string[];

  lunes = new FormControl();
  martes = new FormControl();
  miercoles = new FormControl();
  jueves = new FormControl();
  viernes = new FormControl();
  sabado = new FormControl();
  domingo = new FormControl();

  Horario: HorarioI[];

  constructor(private modal: NgbModal, public router: Router, public service: LoginService) {
    this.Horario = []
    this.dias = []
    this.service.getHorario(this.service.getCurrentGrupo()).subscribe(res => {
      this.Horario = res.message as HorarioI[];
      this.hora_inicio.setValue(this.Horario[0]['hora_inicio'].substring(0, 5))
      this.hora_final.setValue(this.Horario[0]['hora_final'].substring(0, 5))
      this.dias = this.Horario[0]['dias'].split('-')
      if (this.dias.includes('L')) {
        this.lunes.setValue(true)
      }
      if (this.dias.includes('M')) {
        this.martes.setValue(true)
      }
      if (this.dias.includes('X')) {
        this.miercoles.setValue(true)
      }
      if (this.dias.includes('J')) {
        this.jueves.setValue(true)
      }
      if (this.dias.includes('V')) {
        this.viernes.setValue(true)
      }
      if (this.dias.includes('S')) {
        this.sabado.setValue(true)
      }
      if (this.dias.includes('D')) {
        this.domingo.setValue(true)
      }
    })
  }

  ngOnInit(): void {
  }

  summit(contenido: any) {

    const newdias = []
    if (this.lunes.value) {
      newdias.push('L')
    }
    if (this.martes.value) {
      newdias.push('M')
    }
    if (this.miercoles.value) {
      newdias.push('X')
    }
    if (this.jueves.value) {
      newdias.push('J')
    }
    if (this.viernes.value) {
      newdias.push('V')
    }
    if (this.sabado.value) {
      newdias.push('S')
    }
    if (this.domingo.value) {
      newdias.push('D')
    }
    const body: HorarioI = {
      hora_inicio: this.hora_inicio.value,
      hora_final: this.hora_final.value,
      dias: newdias.join('-')
    }
    this.service.putHorario(body, this.service.getCurrentGrupo()).subscribe()
    this.open(contenido)
  }

  Back() {
    this.router.navigate(['DetalleListaAsignaturasDepartamento'])
  }

  open(contenido: any) {
    this.modal.open(contenido, { size: 'sm', centered: true });
  }
}

interface HorarioI {
  hora_inicio: string,
  hora_final: string,
  dias: string
}
