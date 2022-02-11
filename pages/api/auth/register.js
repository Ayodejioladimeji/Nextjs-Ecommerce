import connectDB from '../../../utils/connectDB';
import Users from '../../../models/userModel';
import valid from '../../../utils/valid';
import bcrypt from 'bcrypt';

// Database connection
connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    const errMsg = valid(name, email, username, password);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new Users({
      name,
      email,
      username,
      password: passwordHash,
    });

    await newUser.save();

    res.json({ msg: 'Registration Successful' });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};