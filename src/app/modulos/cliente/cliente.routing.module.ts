import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaComponent } from "./cliente-lista/cliente-lista.component";
import { ClienteDetalheComponent } from "./cliente-detalhe/cliente-detalhe.component";

const clienteRoutes: Routes = [
    { path: '', component: ClienteListaComponent },
    { path: 'novo', component: ClienteFormComponent },    
    { path: 'editar/:id', component: ClienteFormComponent },
    { path: ':id', component: ClienteDetalheComponent }    
];

@NgModule({
    imports: [RouterModule.forChild(clienteRoutes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule {}