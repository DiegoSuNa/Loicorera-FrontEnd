import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { TablaInventarioComponent } from './components/tabla-inventario/tabla-inventario.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InformeLicoresComponent } from './components/informes/informe-licores/informe-licores.component';
import { InformeProveedorComponent } from './components/informes/informe-proveedor/informe-proveedor.component';
import { InformeVentaComponent } from './components/informes/informe-venta/informe-venta.component';
import { InformeSnackComponent } from './components/informes/informe-snack/informe-snack.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { HttpClientModule } from '@angular/common/http';
import { InventarioService } from './services/invetario/inventario.service';
import { ProveedorService } from './services/proveedor/proveedor.service';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioInventarioComponent } from './components/formulario-inventario/formulario-inventario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaInventarioComponent,
    NotFoundComponent,
    InformeLicoresComponent,
    InformeProveedorComponent,
    InformeVentaComponent,
    InformeSnackComponent,
    PerfilComponent,
    InventarioComponent,
    ErrorComponent,
    InicioComponent,
    FormularioInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [InventarioService,ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
