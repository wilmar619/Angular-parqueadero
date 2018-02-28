export class  Vehiculo{

    tipoVehiculo: string;
    placa: string;
    horaIngreso: Date;

    constructor(tipoVehiculo: string, placa: string,horaIngreso: Date ) {
        this.tipoVehiculo = tipoVehiculo;
        this.placa = placa;
        this.horaIngreso = horaIngreso;
      
    }
}
