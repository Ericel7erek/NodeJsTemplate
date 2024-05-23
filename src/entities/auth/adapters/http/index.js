import express from 'express';
import Controller from "../../controller";
import {asyncHandler} from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";

const router = express.Router();

// GET ALL
router.post('/login', asyncHandler(async (req, res) => {

    const data = await Controller.login(req.body.token);
    console.log(data);
    res.send(data);
}));


export default app => app.use('/auth', router);