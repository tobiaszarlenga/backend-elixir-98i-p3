import express from 'express';
import { Contatcs } from '../../controllers/Contact/index.js';

export const contactRouter = express.Router();

contactRouter.get('/', Contatcs.GetController.getContact);
contactRouter.post('/', Contatcs.PostController.postContact);
