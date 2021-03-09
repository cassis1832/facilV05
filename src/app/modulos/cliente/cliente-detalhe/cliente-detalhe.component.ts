import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  clienteId!: number;
  inscricao!: Subscription;
  cliente: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: ClienteService
  ) { }


  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.clienteId = params['id'];

        this.cliente = this.cursosService.getCliente(this.clienteId);

        if (this.cliente == null) {
          this.router.navigate(['/cliente/naoEncontrado']);
        }
      }
    );
  }
  
  onBotaoCancela() {
    this.router.navigate(['/cliente']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
