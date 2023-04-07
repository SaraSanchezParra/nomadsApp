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

const routes: Routes = [
  { path: "home-loged", component: HomeLogedComponent },
  { path: "home-no-loged", component: HomeNoLogedComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "chatGeneral", component: ChatGeneralComponent },
  { path: "chatPrivado", component: ChatPrivadoComponent },
  { path: "add-viaje", component: AddViajeComponent },
  { path: "landin-page", component: LandingPageComponent },
  { path: "login", component: LoginComponent },
  { path: "modificarPerfil", component: ModificarPerfilComponent },
  { path: "modificarViaje", component: ModificarViajeComponent },
  { path: "onBoarding", component: OnBoardingComponent },
  { path: "paginaViaje", component: PaginaViajeComponent },
  { path: "quienesSomos", component: QuienesSomosComponent },
  { path: "register", component: RegisterComponent },
  { path: "sobreLaApp", component: SobrelaAppComponent },
  { path: "viajesDestino", component: ViajesDestinoComponent },
  { path: "contactanos", component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
