import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { ListarVeiculosComponent } from './listar-veiculos/listar-veiculos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: 'listar-veiculos', component: ListarVeiculosComponent},
  {path: 'cadastrar-veiculo/:id', component: CadastrarVeiculoComponent},
  {path: '', component: IndexComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
