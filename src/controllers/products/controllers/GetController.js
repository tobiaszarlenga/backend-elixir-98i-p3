import ProductModel from '../../../models/ProductSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetController {
  static async getProducts(req, res) {
    try {
      const data = await ProductModel.find({ isActive: true }).lean();

      const filteredData = data.map((product) => ({
        id: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        description: product.description,
        category: product.category,
        available: product.available,
        optionsFree: product.optionsFree,
      }));

      res.json({
        data: filteredData,
        message: 'Productos encontrados correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al leer la lista de productos');
    }
  }

  // eslint-disable-next-line consistent-return
  static async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById(id).lean();

      if (!product || !product.isActive) {
        return res.status(404).json({
          message: 'Producto no encontrado',
        });
      }

      res.json({
        data: product,
        message: 'Producto encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al leer el producto');
    }
  }
}
