import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformeLicoresComponent } from './components/informes/informe-licores/informe-licores.component';
import { InformeProveedorComponent } from './components/informes/informe-proveedor/informe-proveedor.component';
import { InformeSnackComponent } from './components/informes/informe-snack/informe-snack.component';
import { InformeVentaComponent } from './components/informes/informe-venta/informe-venta.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioInventarioComponent } from './components/formulario-inventario/formulario-inventario.component';

const routes: Routes = [
  {path: 'inventario', component: InventarioComponent},
  {path: 'formulario-inventario', component: FormularioInventarioComponent},
  {path: 'informe licores', component: InformeLicoresComponent},
  {path: 'informe proveedor', component: InformeProveedorComponent},
  {path: 'informe venta', component: InformeVentaComponent},
  {path: 'informe snack', component: InformeSnackComponent},
  {path: 'error', component: ErrorComponent},
  {path: '', component: InicioComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }