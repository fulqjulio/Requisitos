import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login.service';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'requisitos-front-end';

  constructor(private modal: NgbModal, public service: LoginService, public router: Router) {
    
  }

  ngOnInit(): void {
    this.service.loadLocalStorage();
  }

  selectTipo(tipo: any){
    this.service.setTipoSolicitud(tipo)
    if (tipo == 'Creación') {
      this.router.navigate(['CrearSolicitudAsignatura'])
    }
    else{
      this.router.navigate(['ModificarSolicitudAsignatura'])
    }
  }

  open(contenido: any) {
    this.modal.open(contenido, { size: 'sm', centered: true });
  }

  Logout() {
    this.service.setPerfil('');
    this.router.navigate([''])
  }
}
