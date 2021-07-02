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
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listaEmpleados);
  }

}
