const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json());

const port = 8000;

mongoose.connect('mongodb://localhost:27017/res')
  .then(() => { console.log("mongodb is connected"); })
  .catch((err) => { console.log(err); });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

app.post('/himanshu', async (req, res) => {
  const { username, password } = req.body;

  try {
    await User.create({
      username: username,
      password: password
    });
    res.send({ status: "001", message: "We done it" });
  } catch (err) {
    res.status(500).send({ status: "002", message: "Error creating user" });
  }
});

app.get('/read', async (req, res) => {
  try {
    const users = await User.find();
    res.send({ status: "001", allUsers: users });
  } catch (err) {
    res.status(500).send({ status: "002", message: "Error reading users" });
  }
});

app.delete('/deleteuser/:user_id', async (req, res) => {
  try {
    const userId = req.params.user_id;
    await User.findByIdAndDelete(userId);
    res.send({ status: "001", message: "User deleted" });
  } catch (err) {
    res.status(500).send({ status: "002", message: "Error deleting user" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
