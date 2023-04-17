import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDiaComponent } from './components/card-dia/card-dia.component';
import { CardPuntoInteresComponent } from './components/card-punto-interes/card-punto-interes.component';
import { HeaderVerdeComponent } from './components/header-verde/header-verde.component';
import { CommonModule } from '@angular/common';
import { CardViajeComponent } from './components/card-viaje/card-viaje.component';
import { DayCardComponent } from './components/day-card/day-card.component';
import { PuntoDeInteresCardComponent } from './components/punto-de-interes-card/punto-de-interes-card.component';
import { CardChatComponent } from './components/card-chat/card-chat.component';
import { AddDiaComponent } from './pages/add-dia/add-dia.component';
import { ModificarDiaComponent } from './pages/modificar-dia/modificar-dia.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
import { DatosUsuarioService } from './services/datos-usuario.service';
import { ViajesService } from './services/viajes.service';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { ChatsService } from './services/chats.service';
import { ToastrModule } from 'ngx-toastr';



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
    HeaderVerdeComponent,
    CardViajeComponent,
    DayCardComponent,
    PuntoDeInteresCardComponent,
    CardChatComponent,
    AddDiaComponent,
    ModificarDiaComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [DatosUsuarioService, ViajesService,ChatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
