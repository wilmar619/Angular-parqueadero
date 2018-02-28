import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './parking/inicio/inicio.component';
import { GuardarComponent } from './parking/guardar/guardar.component';
import { SacarVehiculoComponent } from './parking/sacar-vehiculo/sacar-vehiculo.component';
import { ListarVehiculosActivosComponent } from './parking/listar-vehiculos-activos/listar-vehiculos-activos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'guardarVehiculo', component: GuardarComponent},
  {path: 'sacarVehiculo', component: SacarVehiculoComponent},
  {path: 'listaVehiculosActivos', component: ListarVehiculosActivosComponent},
  {path: '', component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
