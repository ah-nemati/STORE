import ConnectDB from "../../../utils/ConnectDB";
import Product from "../../../models/productModels";

ConnectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res);
      break;
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const product = await Product.findById(id);
    if (!product)
      return res.status(400).json({ err: "product does not exist" });
    res.json({
      product,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
