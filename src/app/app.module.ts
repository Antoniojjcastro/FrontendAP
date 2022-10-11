import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';
import { HeaderComponent } from './Component/header/header.component';
import { ScrollAnimationDirective } from './Directive/scroll-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    HeaderComponent,
    ScrollAnimationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
