import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         require: true,
//         trim: true
//     },
//     price: {
//         type: String,
//         require: true,
//         trim: true
//     },
//     description: {
//         type: String,
//         require: true,
//     },
//     content: {
//         type: String,
//         require: true,
//     },
//     images: {
//         type: Array,
//         require: true,
//     },
//     category: {
//         type: String,
//         require: true,
//     },
//     checked: {
//         type: Boolean,
//         require: false,
//     },
//     inStock: {
//         type: Number,
//         require: 0
//     },
//     sold: {
//         type: Number,
//         require: 0
//     }
// }, {
//     timestamps: true
// });

const userSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
      trim: true,
    },
    // content: {
    //   type: String,
    //   require: true,
    // },

    // checked: {
    //   type: Boolean,
    //   require: false,
    // },
    // inStock: {
    //   type: Number,
    //   require: 0,
    // },
    // sold: {
    //   type: Number,
    //   require: 0,
    // },
    title: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = mongoose.models.product || mongoose.model("product", userSchema);
export default Dataset;
