import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ClienteService } from '../cliente.service';
import { ConfirmaExclusaoComponent } from '../../../shared/components/confirma-exclusao/confirma-exclusao.component';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: any[] = [];

  collectionSize!: number;
  page: number = 1;
  pageSize: number = 5

  closeResult = '';


  argumento!: string;

  constructor(private clientesService: ClienteService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
    this.collectionSize = this.clientes.length;
  }

  openConfirmacao(cliente: any) {
    let objetoDeletar: string[] = new Array(2);
    objetoDeletar [0] = 'Cliente';
    objetoDeletar [1] = cliente.nome;

    const modalRef = this.modalService.open(ConfirmaExclusaoComponent);
    modalRef.componentInstance.objetoDeletar = objetoDeletar;

    modalRef.result.then((result) => {
      if (result && result == "Ok") {
        this.excluirCliente();
      }
    },
      () => { });
  }

  pesquisa() {
    this.clientesService.getClientesByNome(this.argumento);
  }

  criarCliente() { }
  excluirCliente() { }
}
