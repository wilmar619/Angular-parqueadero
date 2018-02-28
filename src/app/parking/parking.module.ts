import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuardarComponent } from './guardar/guardar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';
import { ListarVehiculosActivosComponent } from './listar-vehiculos-activos/listar-vehiculos-activos.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InicioComponent, GuardarComponent, SacarVehiculoComponent, ListarVehiculosActivosComponent]
})
export class ParkingModule { }
