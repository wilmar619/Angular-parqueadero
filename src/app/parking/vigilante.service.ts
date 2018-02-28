import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Moto } from './Moto';
import { Carro } from './Carro';
import { Vehiculo } from './vehiculo';
import { Factura } from './Factura';


@Injectable()
export class VigilanteService {

  private carroUrl = 'http://192.168.2.7:8081/parqueadero/addCarro';
  private motoUrl ='http://192.168.2.7:8081/parqueadero/addMoto';
  private sacarVehiculoUrl = 'http://192.168.2.7:8081/parqueadero/outVehiculo';
  private vehiculosActivosUrl ='http://192.168.2.7:8081/parqueadero/listVehiculoActivos';



  constructor(private http: Http) { }


  guardarCarro(carro: Carro): Observable<Carro> {
    return this.http.post(this.carroUrl, carro)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  guardarMoto(moto: Moto): Observable<Moto> {
    return this.http.post(this.motoUrl, moto)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  sacarVehiculoByPlaca(placa: string): Observable<Factura> {
    return this.http.post(this.sacarVehiculoUrl,placa)
    .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findAll(): Observable<Vehiculo[]>  {
    return this.http.get(this.vehiculosActivosUrl)
    .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}


