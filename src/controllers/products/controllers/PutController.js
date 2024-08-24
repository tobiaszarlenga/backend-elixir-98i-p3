import HttpCodes from 'http-status-codes';
import ProductModel from '../../../models/ProductSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PutController {
  // eslint-disable-next-line consistent-return
  static async updateProduct(req, res) {
    const { body } = req;
    const { id } = req.params;

    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        {
          name: body.name,
          price: body.price,
          imageUrl: body.imageUrl,
          description: body.description,
          category: body.category,
          available: body.available,
          optionsFree: body.optionsFree,
        },
        { new: true, runValidators: true },
      );

      if (!updatedProduct) {
        return res.status(HttpCodes.NOT_FOUND).json({
          message: 'Producto no encontrado',
        });
      }

      res.status(HttpCodes.OK).json({
        data: updatedProduct,
        message: 'Producto actualizado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al actualizar el producto');
    }
  }
}

export default PutController;
