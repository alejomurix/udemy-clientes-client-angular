import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes: Cliente[];

  // injeccion de dependencia, clase ClienteService; el servicio de cliente.
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe(clients => this.clientes = clients);
  }

}
