import BlogsModel from '../../../models/blogSchema.js';

export class GetController {
  static async getBlogs(_, res) {
    try {
      const data = await BlogsModel.find();

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
      console.error(e);
      res.status(500).json({
        data: null,
        message: 'ocurrio un error al buscar los blogs',
      });
    }
  }
}
