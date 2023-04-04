import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeLogedComponent } from './pages/home-loged/home-loged.component';
import { HomeNoLogedComponent } from './pages/home-no-loged/home-no-loged.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ModificarPerfilComponent } from './pages/modificar-perfil/modificar-perfil.component';
import { PaginaViajeComponent } from './pages/pagina-viaje/pagina-viaje.component';
import { AddViajeComponent } from './pages/add-viaje/add-viaje.component';
import { ModificarViajeComponent } from './pages/modificar-viaje/modificar-viaje.component';
import { ViajesDestinoComponent } from './pages/viajes-destino/viajes-destino.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ChatGeneralComponent } from './pages/chat-general/chat-general.component';
import { ChatPrivadoComponent } from './pages/chat-privado/chat-privado.component';
import { OnBoardingComponent } from './pages/on-boarding/on-boarding.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobrelaAppComponent } from './pages/sobrela-app/sobrela-app.component';
import { MenuHamburguesaComponent } from './components/menu-hamburguesa/menu-hamburguesa.component';
import { CardDiaComponent } from './components/card-dia/card-dia.component';
import { CardPuntoInteresComponent } from './components/card-punto-interes/card-punto-interes.component';
import { HeaderVerdeComponent } from './components/header-verde/header-verde.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    HomeLogedComponent,
    HomeNoLogedComponent,
    PerfilComponent,
    ModificarPerfilComponent,
    PaginaViajeComponent,
    AddViajeComponent,
    ModificarViajeComponent,
    ViajesDestinoComponent,
    BusquedaComponent,
    ChatGeneralComponent,
    ChatPrivadoComponent,
    OnBoardingComponent,
    QuienesSomosComponent,
    ContactoComponent,
    SobrelaAppComponent,
    MenuHamburguesaComponent,
    CardDiaComponent,
    CardPuntoInteresComponent,
    HeaderVerdeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
