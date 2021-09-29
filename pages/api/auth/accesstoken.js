import ConnectDB from "../../../utils/ConnectDB";
import user from "../../../models/userModel";
import jwt from "jsonwebtoken";
import { createAccesstoken } from "../../../utils/jsonwebtoken";

ConnectDB();

export default async (req, res) => {
  try {
    const { refreshtoken } = req.cookies;
    if (!refreshtoken) return res.status(400).json({ err: "please login now!" });

    const result = jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET);
    if (!result) return res.status(400).json({ err: "token is incorrect or expired." });

    const users = await user.findById(result.id);
    if (!users) return res.status(400).json({ err: "user doese not exist" });

    const accesstoken = createAccesstoken({ id: users._id });
    res.json({
      accesstoken,
      users: {
        name: users.name,
        email: users.email,
        role: users.role,
        avatar: users.avatar,
        root: users.root,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.massage });
  }
};
