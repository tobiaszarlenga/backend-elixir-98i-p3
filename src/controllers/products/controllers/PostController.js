import HttpCodes from 'http-status-codes';
import ProductModel from '../../../models/productSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postProduct(req, res) {
    // si llegamos aca la info que nos manda el fe ya esta validada

    const { body } = req;
    console.log(body);

    const newProduct = new ProductModel({
      title: body.title,
      imageUrl: body.imageUrl,
      content: body.content,
    });
    try {
      await newProduct.save();
      res.status(HttpCodes.CREATED).json({
        data: null,

        messege: 'product guardado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al guardar el product');
    }
  }
}
