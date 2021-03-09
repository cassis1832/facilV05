import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ConfirmaExclusaoComponent } from '../../shared/components/confirma-exclusao/confirma-exclusao.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }

  private clientes: Cliente[] = [
    { clienteId: 1, nome: 'cliente 01', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' },
    { clienteId: 2, nome: 'cliente 02', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' },
    { clienteId: 3, nome: 'cliente 03', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' },
    { clienteId: 4, nome: 'cliente 04', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' },
    { clienteId: 5, nome: 'cliente 05', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' },
    { clienteId: 6, nome: 'cliente 06', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' },
    { clienteId: 7, nome: 'cliente 07', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' },
    { clienteId: 8, nome: 'cliente 08', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' },
    { clienteId: 9, nome: 'cliente 09', telefone: '011 99898-3255', endereco:'Rua A', numero:'762', complemento:'apto 44' }
  ];

  getClientes() {
    return this.clientes;
  }

  getClientesByNome(nome: string){
  }

  getCliente(id: number) {
    for (let i = 0; i < this.clientes.length; i++) {
      let cliente: Cliente = this.clientes[i];
      if (cliente.clienteId == id) {
        return cliente;
      }
    }
    return null;
  }
  
  alterarCliente(cliente: Cliente) {
    if (cliente.clienteId = 0) {
      this.novoCliente(cliente);
    }
  }

  excluirCliente(cliente: Cliente) { }

  private novoCliente(cliente: Cliente) { }

}