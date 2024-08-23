import HttpCodes from 'http-status-codes';
import BlogModel from '../../../models/blogSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class DeleteController {
  static async deleteBlog(req, res) {
    const {
      params: { id },
    } = req;

    try {
      const action = await BlogModel.updateOne(
        // criterio de Busqueda
        {
          _id: id,
          isActive: true,
        },
        // lo que actualizamos
        { isActive: false },
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
        message: 'blog eliminado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al eliminar el recurso indicado');
    }
  }
}
