import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMsgModalComponent } from './app-msg-modal/app-msg-modal.component';
import { IndexComponent } from './index/index.component';
import { ListarVeiculosComponent } from './listar-veiculos/listar-veiculos.component';
import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyFooterComponent,
    MyHeaderComponent,
    AppMsgModalComponent,
    IndexComponent,
    ListarVeiculosComponent,
    CadastrarVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
