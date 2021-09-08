import ConnectDB from "../../../utils/ConnectDB";
import user from "../../../models/userModel";
import bcrypt from "bcrypt";
import {
  createAccesstoken,
  createRefreshtoken,
} from "../../../utils/jsonwebtoken";

ConnectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userp = await user.findOne({ email });
    const isMatch = await bcrypt.compare(password, userp.password);
    if (!isMatch) return res.status(400).json({ err: "please enter corect password." });
    const accesstoken = createAccesstoken({ id: userp._id });
    const refreshtoken = createRefreshtoken({ id: userp._id });
    res.json({
      msg: "login success!",
      accesstoken,
      refreshtoken,
      users: {
        name: userp.name,
        email: userp.email,
        role: userp.role,
        root: userp.root,
        avatar: userp.avatar,
      },
    });

  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
