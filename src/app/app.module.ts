import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';
import { HeaderComponent } from './Component/header/header.component';
import { ScrollAnimationDirective } from './Directive/scroll-animation.directive';
import { AboutMeComponent } from './Component/about-me/about-me.component';
import { EducacionComponent } from './Component/educacion/educacion.component';
import { ProyectoComponent } from './Component/proyecto/proyecto.component';
import { ExperienciaComponent } from './Component/experiencia/experiencia.component';
import { SkillsComponent } from './Component/skills/skills.component';
import { FooterComponent } from './Component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    HeaderComponent,
    ScrollAnimationDirective,
    AboutMeComponent,
    EducacionComponent,
    ProyectoComponent,
    ExperienciaComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
