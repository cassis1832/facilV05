import { ClienteZoomComponent } from './../cliente-zoom/cliente-zoom.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClienteService } from '../cliente.service';
import { Cliente } from 'src/app/shared/models/cliente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  inscricao!: Subscription;
  cliente!: any;
  clienteId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {

        this.clienteId = params['id'];

        if (this.clienteId == 0) {
          this.cliente = new Cliente();
        }
        else {
          this.cliente = this.clienteService.getCliente(this.clienteId);

          if (this.cliente == null) {
            this.router.navigate(['/cliente/naoEncontrado']);
          }
        }
      }
    );
  }

  openZoom() {
    const modalRef = this.modalService.open(ClienteZoomComponent, { size: 'lg', backdrop: 'static' });

    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    },
      () => { });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onBotaoOk(cliente: Cliente) {
    this.clienteService.alterarCliente(cliente);
    this.router.navigate(['/cliente']);
  }

  onBotaoCancela() {
    this.router.navigate(['/cliente']);
  }
}
