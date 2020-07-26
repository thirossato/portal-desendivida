import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinhasFinancasComponent } from './pages/minhas-financas/minhas-financas.component';
import { SideNavComponent } from './common/components/side-nav/side-nav.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardWithDetailsComponent } from './common/components/card-with-details/card-with-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MinhasFinancasComponent,
    SideNavComponent,
    HeaderComponent,
    CardWithDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
