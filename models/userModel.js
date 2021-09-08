import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    uniqe: [true, "this email already exists!"]
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: "user",
  },
  root: {
    type: Boolean,
    default: false,
  },
  avatar: {
    type: String,
    default:
      "/avatar.png",
  }
}, {
  timestamps: true
});

let Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;
