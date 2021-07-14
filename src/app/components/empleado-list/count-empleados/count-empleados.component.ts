import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  //para pasar datos del componente padre al hijo @Input
  @Input() todos:number;
  @Input() masculinos:number;
  @Input() femeninos:number;
    

  radioButtonSeleccionado = "Todos";

  constructor() {
    this.todos = 0;
    this.masculinos = 0;
    this.femeninos = 0;
   }

  ngOnInit(): void {
    console.log(this.todos);
  }

}
