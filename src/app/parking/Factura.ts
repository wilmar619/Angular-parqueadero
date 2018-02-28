export class Factura {

    placa: string;
    horaIngreso: Date;
    horaSalida: Date;
    tiempoDeParqueo: number;
    pagoTotal: number;

    constructor(placa: string,horaIngreso: Date,horaSalida: Date,tiempoDeParqueo: number,pagoTotal: number){
        this.placa = placa;
        this.horaIngreso = horaIngreso;
        this.horaSalida = horaSalida;
        this.tiempoDeParqueo = tiempoDeParqueo;
        this.pagoTotal = pagoTotal;
    }
}
