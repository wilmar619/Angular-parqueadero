import { Component, OnInit } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Moto } from '../Moto';
import { Carro } from '../Carro';
import { Vehiculo } from '../vehiculo';
import { Factura } from '../Factura';


@Component({
  selector: 'app-sacar-vehiculo',
  templateUrl: './sacar-vehiculo.component.html',
  styleUrls: ['./sacar-vehiculo.component.css'],
  providers: [VigilanteService]
})
export class SacarVehiculoComponent implements OnInit {

  facturaForm: FormGroup;
  datosFactura: Factura;
  capturarErrores: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.facturaForm = new FormGroup({
      placaVehiculo: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if (this.facturaForm.valid) {  
      this.vigilanteService.sacarVehiculoByPlaca(this.facturaForm.controls['placaVehiculo'].value).subscribe(
        responde => {
            this.datosFactura = responde;
            console.log(this.datosFactura);
            alert("el vehiculo fue retirado exitosamente");
          },
          (error: Response) => {
            this.capturarErrores = error.json();
            alert(this.capturarErrores.message);
          }
        );
    }

   this.facturaForm.reset();
 
  }
  
  redirectInicioPage() {
    this.router.navigate(['/inicio']);

  }  
}
