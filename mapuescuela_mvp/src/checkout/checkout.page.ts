import { Component } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { PedidoRequest, PedidoResponse } from '../models/pedido.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {

  constructor(private pedidoService: PedidoService) {}

  generarPedidoPrueba(): void {
    const mockPedido: PedidoRequest = {
      clienteId: 'CLI-001',
      productos: [
        { id: 'PROD-1', nombre: 'Libro Mapudungun', precio: 15000, cantidad: 1 },
        { id: 'PROD-2', nombre: 'Guía de Aprendizaje', precio: 8000, cantidad: 2 }
      ],
      modalidadEntrega: 'Despacho a domicilio'
    };

    this.pedidoService.crearPedido(mockPedido).subscribe({
      next: (response: PedidoResponse) => {
        console.log('Pedido creado con éxito:', response);
      },
      error: (error) => {
        console.error('Error al crear el pedido:', error);
      }
    });
  }
}
