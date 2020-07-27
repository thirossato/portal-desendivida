import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinhasFinancasComponent } from './pages/minhas-financas/minhas-financas.component';
import { SideNavComponent } from './common/components/side-nav/side-nav.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardWithDetailsComponent } from './common/components/card-with-details/card-with-details.component';
import { CardWithProgressComponent } from './common/components/card-with-progress/card-with-progress.component';
import { AnaliseFinanceiraComponent } from './pages/analise-financeira/analise-financeira.component';
import { RenegociacaoComponent } from './pages/renegociacao/renegociacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MinhasFinancasComponent,
    SideNavComponent,
    HeaderComponent,
    CardWithDetailsComponent,
    CardWithProgressComponent,
    AnaliseFinanceiraComponent,
    RenegociacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
