import HttpCodes from 'http-status-codes';
import ProductModel from '../../../models/ProductSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postProduct(req, res) {
    const { body } = req;
    const newProduct = new ProductModel({
      name: body.name,
      price: body.price,
      imageUrl: body.imageUrl,
      description: body.description,
      category: body.category,
      available: body.available,
      optionsFree: body.optionsFree,
    });

    try {
      await newProduct.save();
      res.status(HttpCodes.CREATED).json({
        data: null,
        message: 'Producto guardado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al guardar el producto');
    }
  }
}
