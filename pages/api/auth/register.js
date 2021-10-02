import ConnectDB from "../../../utils/ConnectDB";
import user from "../../../models/userModel";
import valid from "../../../utils/valid";
import bcrypt from "bcrypt";

ConnectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body;
    const users = await user.findOne({ email });
    if (users) {
      return res.json({ err: "this email already exists!" });
    }
    const errmsg = valid(name, email, password, cf_password);
    if (errmsg) {
      console.log(errmsg);
      return res.json({ err: errmsg });
    }

    const passwordhash = await bcrypt.hash(password, 12);

    const newuser = new user({
      name,
      email,
      password: passwordhash,
      cf_password,
    });

    await newuser.save();
    res.json({ msg: "register success!" });
  } catch (err) {
    console.log(err);
    return res.json({ err: err.message });
  }
};
