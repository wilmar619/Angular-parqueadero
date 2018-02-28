import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectGuardarVehiculoPage() {
    this.router.navigate(['/guardarVehiculo']);
 
  }

  redirectSacarVehiculoCarroPage() {
    this.router.navigate(['/sacarVehiculo']);
 
  }

  redirectlistaVehiculosActivosPage() {
    this.router.navigate(['/listaVehiculosActivos']);
 
  }

}
