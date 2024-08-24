import ProductsModel from '../../../models/productSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetController {
  static async getProducts(_, res) {
    try {
      const data = await ProductsModel.find({
        // criterio de busqueda
        isActive: true,
      });

      const filterdData = data.map((product) => {
        return {
          id: product._doc._id,
          title: product._doc.title,
          imageUrl: product._doc.imageUrl,
          content: product._doc.content,
        };
      });
      res.json({
        data: filterdData,
        message: 'products encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al leer la lista ');
    }
  }

  static async getProduct(req, res) {
    const {
      params: { id },
    } = req;
    try {
      const data = await ProductsModel.findOne({
        // criterio de busqueda
        isActive: true,
        _id: id,
      });

      const formattedData = {
        id: data._doc._id,
        title: data._doc.title,
        imageUrl: data._doc.imageUrl,
        content: data._doc.content,
      };
      res.json({
        data: formattedData,
        message: 'product encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al leer el product ');
    }
  }
}
