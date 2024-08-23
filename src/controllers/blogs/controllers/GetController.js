import BlogsModel from '../../../models/blogSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetController {
  static async getBlogs(_, res) {
    try {
      const data = await BlogsModel.find({
        // criterio de busqueda
        isActive: true,
      });

      const filterdData = data.map((blog) => {
        return {
          id: blog._doc._id,
          title: blog._doc.title,
          imageUrl: blog._doc.imageUrl,
          content: blog._doc.content,
        };
      });
      res.json({
        data: filterdData,
        message: 'blogs encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al leer la lista ');
    }
  }

  static async getBlog(req, res) {
    const {
      params: { id },
    } = req;
    try {
      const data = await BlogsModel.findOne({
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
        message: 'blog encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al leer el blog ');
    }
  }
}
