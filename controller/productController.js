const productModel = require('../model/productModel');
const userModel = require('../model/userModel');
const cloudinary = require('../config/cloudinary');


 // create :upload a new product
 //get all
 //get one
 //update
 //delete
 //

 // Create / upload a new product
 const uploadProduct = async (req, res) => {
   try {
    const getUserID = await userModel.findById(req.params.userId);

        const { name, description, price, category, stock, image, quantity } = req.body;
        if (!getUserID) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!req.file) {
            return res.status(400).json({ message: "Image file is required....please upload an image" });
        }
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageUrl = result.secure_url;

        const product = await productModel.create({ name, description, price, category, stock, image: imageUrl, quantity });
        
        await getUserID.products.push(product._id);
        await getUserID.save();

        res.status(201).json({
            message: "Product uploaded successfully",
            data: product
        });
   } catch (error) {
        res.status(500).json({ message: error.message });
   }
 };

 // get all products
    const getAllProducts = async (req, res) => {
        try {
            const getAll = await productModel.find();
            return res.status(200).json({
                message: "All products fetched successfully",
                data: getAll
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message
            });
        }
    };

  module.exports = {
    uploadProduct,
    getAllProducts
  };  
