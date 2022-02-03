import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { usuarioI } from 'src/app/Interfaces/usuario.interface';
import { LoginService } from '../../login.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  nombre_usuario = new FormControl();
  contrasena = new FormControl();

  constructor(public service: LoginService, public router: Router, private modal: NgbModal) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  Summit(contenido: any) {
    if (this.nombre_usuario.value == '' || this.contrasena.value == '') {
      this.modal.open(contenido, { size: 'sm', centered: true });
    } else {
      this.service.getUser(this.nombre_usuario.value, this.contrasena.value).subscribe(async res => {
        var usuario = res.message as usuarioI[];
        if (usuario[0]) {
          this.service.setCurrentUser(usuario[0]['nombre_usuario']);
          this.service.setUserId(usuario[0]['identificacion']);
          this.service.setFullname(usuario[0]['nombre_completo']);
          this.service.setPerfil(usuario[0]['perfil']);
          this.router.navigate(['Home'])
        } else {
          this.modal.open(contenido, { size: 'sm', centered: true });
        }
      });
    }
  }
}
