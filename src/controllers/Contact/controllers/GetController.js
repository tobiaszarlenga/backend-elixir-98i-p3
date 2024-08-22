import ContactModel from '../../../models/ContactSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class GetController {
  static async getContact(req, res) {
    try {
      // Obtener solo los contactos activos
      const data = await ContactModel.find({ isActive: true }).lean();

      // Filtrar los datos para incluir solo los campos necesarios
      const filteredData = data.map((contact) => ({
        id: contact._id,
        issue: contact.issue,
        name: contact.name,
        lastname: contact.lastname,
        email: contact.email,
        message: contact.message,
      }));

      // Respuesta con los datos filtrados
      res.json({
        data: filteredData,
        message: 'Contacto encontrados correctamente',
      });
    } catch (e) {
      // Manejo de errores
      internalError(res, e, 'Ocurrió un error al leer la lista de mensajes');
    }
  }
}
