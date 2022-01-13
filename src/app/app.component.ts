import { Component, ViewEncapsulation } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'requisitos-front-end';

  constructor(private modal:NgbModal) { }

  open(contenido:any){
    this.modal.open(contenido,{size:'sm',centered:true});
  }
}
