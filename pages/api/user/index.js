import ConnectDB from "../../../utils/ConnectDB";
import user from "../../../models/userModel";
import bcrypt from "bcrypt";

ConnectDB();

export default async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await updateUser(req, res);
      break;
  }
};

const updateUser = async (req, res) => {
  try {
        const { password } = req.body;
      console.log(password);
    // const passwordhash = await bcrypt.hash(password, 12);
    // await user.findOneAndUpdate({ email }, { password: passwordhash });
    // res.json({ msg: "updated sucessecfully !" });
  } catch (error) {
    return res.status(500).json({ err: error.massage });
  }
};
