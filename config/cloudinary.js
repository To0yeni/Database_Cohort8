const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "jstdpkck",
    api_key: "238756465626412",
    api_secret: "gpjLdxsDcJ7H0JHvjI6XyqchSAA"
});

module.exports = cloudinary;