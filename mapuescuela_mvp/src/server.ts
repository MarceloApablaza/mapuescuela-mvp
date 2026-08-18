import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const pedidos: any[] = [];

app.post('/api/pedidos', (req: Request, res: Response) => {
  const { clienteId, productos, modalidadEntrega } = req.body;

  if (!productos || !Array.isArray(productos) || productos.length === 0) {
    return res.status(400).json({ error: 'La lista de productos es requerida y no puede estar vacía.' });
  }

  const pedidoId = `PED-${Math.floor(1000 + Math.random() * 9000)}`;
  const nuevoPedido = {
    id: pedidoId,
    clienteId,
    productos,
    modalidadEntrega,
    estado: 'Pendiente de pago',
    fecha: new Date().toISOString()
  };

  pedidos.push(nuevoPedido);

  return res.status(201).json({
    mensaje: 'Pedido creado exitosamente',
    pedido: nuevoPedido,
    datosTransferencia: {
      banco: 'Banco Estado',
      tipoCuenta: 'Cuenta Corriente',
      numeroCuenta: '123456789',
      rut: '65.123.456-7',
      email: 'contacto@mapuescuela.org'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
