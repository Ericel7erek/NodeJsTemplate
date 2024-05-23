import express from 'express';
import Controller from '../../controller';
import { asyncHandler } from "@Middlwares/error-handler";
// Para operaciones con acceso restringido, introduciremos un segundo parámetro que será la variable restrictedAccess
import restrictedAccess from "@Middlwares/restricted-access";
import Model from '../../model'
const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    // await Controller.create({ email: 'borrame@borrame.com' });
    res.json('Llegamos a book');
}));
router.post('/register', asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await Model.get({ email });
    if (existingUser.length>0) {
      return res.status(400).json({ message: 'User already exists' });
    }
    await Model.create({ email, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}));
router.post('/signin', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await Model.get({ email});
      if (user.length===0) {
          return res.status(400).json({ message: 'Invalid email or password' });
        }
    const userpassword = await Model.get({ password }); 
    if (userpassword.length===0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // console.log(user, "Dandandajna");
    // Return user data on successful sign-in
    res.status(200).json(user);
  } catch (error) {
    console.error('Error signing in user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}));

router.get('/users', asyncHandler(async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await Model.get();
    
    const userList = users.map(user => ({ id: user.id, email: user.email }));
    res.status(200).json(userList);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}));


export default (app, entityUrl) => app.use(entityUrl, router);
