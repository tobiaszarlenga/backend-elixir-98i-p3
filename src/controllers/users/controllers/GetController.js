import UsersModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetController {
  static async getUsers(_, res) {
    try {
      const data = await UsersModel.find({
        // criterio de busqueda
        isActive: true,
      });

      const filterdData = data.map((user) => {
        return {
          id: user._doc._id,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          isAdmin: user.isAdmin,
        };
      });
      res.json({
        data: filterdData,
        message: 'usario encontrado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al leer la lista de usuarios ');
    }
  }
}
