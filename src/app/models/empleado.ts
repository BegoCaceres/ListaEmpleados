export class Empleado{
    dossier: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    salario: number;

    constructor(dossier:number,nombre:string, apellidos:string, sexo:string, salario:number){
        this.dossier = dossier;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.sexo = sexo;
        this.salario = salario;
    }
}