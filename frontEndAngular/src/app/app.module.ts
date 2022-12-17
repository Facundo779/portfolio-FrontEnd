import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SectionComponent } from './componentes/section/section.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RedesSocialesListComponent } from './componentes/header/elementos/redes-sociales-list/redes-sociales-list.component';
import { InicioSesionComponent } from './componentes/header/elementos/inicio-sesion/inicio-sesion.component';
import { RegistroUsuarioComponent } from './componentes/header/elementos/registro-usuario/registro-usuario.component';
import { AcercaDeComponent } from './componentes/section/elementos/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/section/elementos/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/section/elementos/experiencia/experiencia.component';
import { ProyectoComponent } from './componentes/section/elementos/proyecto/proyecto.component';
import { HardSoftSkillsComponent } from './componentes/section/elementos/hard-soft-skills/hard-soft-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    RedesSocialesListComponent,
    InicioSesionComponent,
    RegistroUsuarioComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectoComponent,
    HardSoftSkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
