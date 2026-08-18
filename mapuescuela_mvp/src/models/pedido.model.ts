export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

export interface PedidoRequest {
  clienteId: string;
  productos: Producto[];
  modalidadEntrega: string;
}

export interface DatosTransferencia {
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  rut: string;
  email: string;
}

export interface Pedido {
  id: string;
  clienteId: string;
  productos: Producto[];
  modalidadEntrega: string;
  estado: string;
  fecha: string;
}

export interface PedidoResponse {
  mensaje: string;
  pedido: Pedido;
  datosTransferencia: DatosTransferencia;
}
