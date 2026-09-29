const express = require('express');

const userRoute = express.Router();
const { createUser, getAllUsers, getSingleUser, updateUser, deleteUser, loginUser } = require('../controller/userController.js');

userRoute.post('/new-user', createUser);
userRoute.get('/all-users', getAllUsers);
userRoute.get('/get-one-user/:id', getSingleUser);
userRoute.patch('/update-user/:id', updateUser);
userRoute.delete('/delete-user/:id', deleteUser);
userRoute.get('/login',loginUser);

module.exports = userRoute;