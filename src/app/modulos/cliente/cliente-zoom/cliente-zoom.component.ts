import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/shared/models/cliente';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-zoom',
  templateUrl: './cliente-zoom.component.html',
  styleUrls: ['./cliente-zoom.component.css']
})
export class ClienteZoomComponent implements OnInit {

  clientes: any[] = [];
  cliente!: Cliente;

  collectionSize!: number;
  page: number = 1;
  pageSize: number = 5

  closeResult = '';

  argumento!: string;

  constructor(private clientesService: ClienteService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
    this.collectionSize = this.clientes.length;
  }

  pesquisa() {
    console.log(this.argumento);
  }

  clickBotaoOk(cliente: Cliente) {
    this.activeModal.close(cliente);
    return(cliente);
  }
}
