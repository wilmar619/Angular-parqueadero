import { Component, OnInit } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Moto } from '../Moto';
import { Carro } from '../Carro';
import { Vehiculo } from '../vehiculo';


@Component({
  selector: 'app-sacar-vehiculo',
  templateUrl: './sacar-vehiculo.component.html',
  styleUrls: ['./sacar-vehiculo.component.css'],
  providers: [VigilanteService]
})
export class SacarVehiculoComponent implements OnInit {

  placaVehiculo: Carro;
  vehiculoForm: FormGroup;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.vehiculoForm = new FormGroup({
      placaCarro: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if (this.vehiculoForm.valid) {  
      let placaVehiculo: Carro = new Carro(
        this.vehiculoForm.controls['placaVehiculo'].value);
      this.vigilanteService.sacarVehiculoByPlaca(placaVehiculo).subscribe();
    }
     
   this.vehiculoForm.reset();
   this.redirectInicioPage();
  }
  
  redirectInicioPage() {
    this.router.navigate(['/inicio']);

  }  
}
