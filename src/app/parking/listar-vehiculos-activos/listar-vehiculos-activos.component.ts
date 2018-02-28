import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VigilanteService } from '../vigilante.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-listar-vehiculos-activos',
  templateUrl: './listar-vehiculos-activos.component.html',
  styleUrls: ['./listar-vehiculos-activos.component.css'],
  providers: [VigilanteService]
})
export class ListarVehiculosActivosComponent implements OnInit {

  private vehiculos: Vehiculo[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vigilanteService: VigilanteService) { }

  ngOnInit() {
  this.getAllVehiculos();
  }

  getAllVehiculos() {
    this.vigilanteService.findAll().subscribe(
      respuesta => {
        this.vehiculos = respuesta;
        console.log(respuesta);
      },
      err => {
        console.log(err);
      }
 
    );
  }
  redirectInicioPage() {
    this.router.navigate(['/inicio']);

  }

}


