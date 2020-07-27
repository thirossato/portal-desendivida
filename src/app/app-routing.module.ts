import { RenegociacaoComponent } from './pages/renegociacao/renegociacao.component';
import { AnaliseFinanceiraComponent } from './pages/analise-financeira/analise-financeira.component';
import { MinhasFinancasComponent } from './pages/minhas-financas/minhas-financas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'minhas-financas',
    pathMatch: 'full'
  }, {
    path: 'minhas-financas',
    component: MinhasFinancasComponent
  }, {
    path: 'analise-de-credito',
    component: AnaliseFinanceiraComponent
  }, {
    path: 'renegociacao',
    component: RenegociacaoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
