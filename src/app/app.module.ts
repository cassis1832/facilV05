import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/services/auth.service';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { ConfirmaExclusaoComponent } from './shared/components/confirma-exclusao/confirma-exclusao.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmaExclusaoComponent ]
})
export class AppModule { }
