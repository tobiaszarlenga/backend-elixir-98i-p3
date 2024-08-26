import express from 'express';
import {
  getCartByTable,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
} from '../../controllers/carrito/controllers/cartController.js';

export const cartRouter = express.Router();

// GET: Obtener el carrito de una mesa
cartRouter.get('/:tableNumber', getCartByTable);

// POST: Añadir un ítem al carrito
cartRouter.post('/add', addItemToCart);

// PUT: Actualizar la cantidad de un ítem en el carrito
cartRouter.put('/update', updateItemQuantity);

// DELETE: Eliminar un ítem del carrito
cartRouter.delete('/remove', removeItemFromCart);
