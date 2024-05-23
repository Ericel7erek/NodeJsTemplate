import express from 'express';
import Controller from '../../controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    // await Controller.create({ email: 'borrame@borrame.com' });
    res.send('Llegamos a user');
}));

export default (app, entityUrl) => app.use(entityUrl, router);
