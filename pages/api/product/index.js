import ConnectDB from "../../../utils/ConnectDB";
import Product from "../../../models/productModels";

ConnectDB();

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getproduct(req, res);
            break;
    }
};

const getproduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({
            status: 'success',
            result: products.length,
            products
        })
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
};

