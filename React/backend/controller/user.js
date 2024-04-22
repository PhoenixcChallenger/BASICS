import { userModel } from '../model/user.js'
import bcrypt from 'bcrypt'


//Read all /users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users); 0
  }
  catch (error) {
    console.log(error);
  }
};

//Read single GET /user/:id
export const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await userModel.findOne({ id: id });
  res.json(user);
};

//Create POST /users
export const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userDoc = new userModel({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    const doc = await userDoc.save();
    console.log('doc->', doc);
    req.logIn(doc, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      console.log("login successful.");
      res.status(201).json(doc);
    });
  }
  catch (error) {
    if (error.code === 11000) {
      console.log("Duplicate key error->", error);
      res.status(409).json({ error: "User Already Exists", message: error.message });
    }
    else {
      console.error(error);
      res.status(400).json(error);
    }
  }
};

// Update PUT /users/:id
export const replaceUser = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await userModel.findOneAndReplace({ id: id }, req.body, { new: true })
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

//Update PATCH /user/:id
export const updateUser = (async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await userModel.findOneAndUpdate({ id: id }, req.body, { new: true })
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//Delete DELETE /user/:id
export const deleteUser = (async (req, res) => {
  try {
    const doc = await userModel.findOneAndDelete({ id: id })
    res.status(201).json(doc);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});