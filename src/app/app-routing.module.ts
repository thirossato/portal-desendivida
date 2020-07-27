import { AnaliseFinanceiraComponent } from './pages/analise-financeira/analise-financeira.component';
import { MinhasFinancasComponent } from './pages/minhas-financas/minhas-financas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MinhasFinancasComponent
  },{
    path: 'analisis',
    component: AnaliseFinanceiraComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
