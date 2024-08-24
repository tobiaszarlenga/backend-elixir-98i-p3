import HttpCodes from 'http-status-codes';
import ProductModel from '../../../models/productSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PutController {
  static async putProduct(req, res) {
    const {
      body,
      params: { id },
    } = req;
    // si llegamos al controlador el body ya esta validado y tiene los campos correspondientes
    try {
      const action = await ProductModel.updateOne(
        {
          _id: id,
        },
        body,
      );
      if (action.matchedCount === 0) {
        res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'el recurso no fue encontrado',
        });
        return;
      }
      res.json({
        Data: null,
        message: 'product actualizado correctamente',
      });
    } catch (e) {
      internalError(
        res,
        e,
        'ocurrio un error al actualizar el recurso indicado',
      );
    }
  }
}
