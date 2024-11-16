const Product = require("../../models/ProductSchema");
const cloudinary = require('../../utils/Cloudinary')


const DeleteProduct = async (req, res, next) => {
    const id = req.params
    try {
        const findProduct = await Product.findOneAndDelete({ id })
        

  
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}
module.exports = DeleteProduct