import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  
  listaEmpleados: Empleado[] = [
    { dossier:1,nombre:"David", apellidos:"Gonzalez", sexo:"Masculino",salario:35000},
    { dossier:2,nombre:"Begoña", apellidos:"Cáceres", sexo:"Femenino",salario:25000},
    { dossier:3,nombre:"Oliver", apellidos:"Gonzalez", sexo:"Masculino",salario:20000},
    { dossier:4,nombre:"Rocio", apellidos:"Pérez", sexo:"Femenino",salario:18000},
    { dossier:5,nombre:"Vero", apellidos:"López", sexo:"Femenino",salario:15000},
  ];
  
  total_empleados = 0;
  total_masculinos = 0;
  total_femeninos = 0;

  radioButtonSeleccionado = "Todos";

  constructor() { }

  ngOnInit(): void {
    this.getTotal();
    this.getMasculinos();
    this.getFemeninos();
  }
  
  //devuelve el numero de registros que hay en la lista
  getTotal():number{
    this.total_empleados = this.listaEmpleados.length;
    return this.total_empleados;
  }
  
  //devuelve el numero de registros que hay masculinos
  getMasculinos():number {
    this.total_masculinos = this.listaEmpleados.filter(list => list.sexo === "Masculino").length;
    return this.total_masculinos;
  }
  
  //devuelve el numero de registros que hay femeninos
  getFemeninos():number{
    this.total_femeninos = this.listaEmpleados.filter(list => list.sexo === "Femenino").length;
    return this.total_femeninos;
  }

  empleadoRadioButtonChange(radiobuttonSelec:string):void{
    this.radioButtonSeleccionado = radiobuttonSelec;
  }

  

}
