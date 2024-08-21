import HttpCodes from 'http-status-codes';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../../../models/userSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async postLogin(req, res) {
    const { body } = req;
    try {
      const user = await UserModel.findOne({
        username: body.username,
        iaActive: true,
      });
      if (!user || !bcryptjs.compareSync(body.password, user.password)) {
        res.status(HttpCodes.UNAUTHORIZED).json({
          data: null,
          message: 'usuario o contraseña incorrectos',
        });
        return;
      }

      // aca el ususario es valido y sus credenciales correctas
      // crear el token con la info necesaria y devolverle al cliente

      const userInfo = {
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          isAdmin: user.isAdmin,
        },
      };

      const token = jwt.sign(userInfo, process.env.SECRET_KEY, {
        expiresIn: '1h', // el token expira en 1 hora
      });
      res.json({
        data: token,
        message: 'Sesion iniciada correctamente',
      });
    } catch (e) {
      internalError(res, e, 'ocurrio un error al iniciar sesion');
    }
  }
}
