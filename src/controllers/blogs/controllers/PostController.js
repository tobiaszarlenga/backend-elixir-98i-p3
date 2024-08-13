import BlogModel from '../../../models/blogSchema.js';

export class PostController {
  static async postBlog(req, res) {
    // si llegamos aca la info que nos manda el fe ya esta validada

    const { body } = req;

    const newBlog = new BlogModel({
      title: body.title,
      imageUrl: body.imageUrl,
      content: body.content,
    });
    try {
      await newBlog.save();
      res.status(201).json({
        data: null,

        messege: 'blog guardado correctamente',
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: 'ocurrio un error al guardar el blog',
      });
    }
  }
}
