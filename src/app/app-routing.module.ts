import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLogedComponent } from './pages/home-loged/home-loged.component';
import { HomeNoLogedComponent } from './pages/home-no-loged/home-no-loged.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ChatGeneralComponent } from './pages/chat-general/chat-general.component';
import { ChatPrivadoComponent } from './pages/chat-privado/chat-privado.component';
import { AddViajeComponent } from './pages/add-viaje/add-viaje.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ModificarPerfilComponent } from './pages/modificar-perfil/modificar-perfil.component';
import { ModificarViajeComponent } from './pages/modificar-viaje/modificar-viaje.component';
import { OnBoardingComponent } from './pages/on-boarding/on-boarding.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegisterComponent } from './pages/register/register.component';
import { SobrelaAppComponent } from './pages/sobrela-app/sobrela-app.component';
import { ViajesDestinoComponent } from './pages/viajes-destino/viajes-destino.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PaginaViajeComponent } from './pages/pagina-viaje/pagina-viaje.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
