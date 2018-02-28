import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { VigilanteService } from '../vigilante.service';
import { Moto } from '../Moto';
import { Carro } from '../Carro';


@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css'],
  providers:[VigilanteService]

})
export class GuardarComponent implements OnInit {

  placaCarro: string;
  placaMoto: string;
  cilindraje: number;

  carroForm: FormGroup;
  motoForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vigilanteService: VigilanteService) { }

  ngOnInit() {
      this.carroForm = new FormGroup({
        placaCarro: new FormControl('',Validators.required)
    });

      this.motoForm = new FormGroup({
        placaMoto: new FormControl('',Validators.required),
        cilindraje: new FormControl('',Validators.required)
      });
  }
 
  onSubmit() {
    if (this.carroForm.valid) {

        let carro: Carro = new Carro(
        this.carroForm.controls['placaCarro'].value);
        this.vigilanteService.guardarCarro(carro).subscribe();
        alert("CARRO INGRESADO CORRECTAMENTE");

     }
     if(this.motoForm.valid){

      let moto: Moto = new Moto(
        this.motoForm.controls['placaMoto'].value,
        this.motoForm.controls['cilindraje'].value);
        this.vigilanteService.guardarMoto(moto).subscribe();
        alert("MOTO INGRESADO CORRECTAMENTE");
       
     }
      this.carroForm.reset();
      this.motoForm.reset();
  
  }
  redirectInicioPage() {
    this.router.navigate(['/inicio']);

  }

}
