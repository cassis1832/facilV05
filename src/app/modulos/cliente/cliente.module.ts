import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClienteService } from './cliente.service';
import { ClienteRoutingModule } from './cliente.routing.module';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteZoomComponent } from './cliente-zoom/cliente-zoom.component';
import { ConfirmaExclusaoComponent } from '../../shared/components/confirma-exclusao/confirma-exclusao.component';

@NgModule({
  declarations: [
    ClienteListaComponent,
    ClienteFormComponent,
    ClienteDetalheComponent,
    ConfirmaExclusaoComponent,
    ClienteZoomComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ClienteRoutingModule
  ],
  exports: [],
  providers: [ClienteService]
})
export class ClienteModule { }
