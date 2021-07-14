//para pasar datos del componente hijo al padre
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
//para pasar datos del componente padre al hijo
import { Input } from '@angular/core';

//
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
   //para pasar datos del componente hijo al padre @Output
  @Output() countRadioButtonChange = new EventEmitter<string>();
    

  radioButtonSeleccionado = "Todos";
  
  //tenemos que crear un metodo que emita el evento
  radioChange():void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }

  constructor() {
    this.todos = 0;
    this.masculinos = 0;
    this.femeninos = 0;
   }

  ngOnInit(): void {
    console.log(this.todos);
  }

}
