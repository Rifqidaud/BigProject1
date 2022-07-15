const db = require("../database/models");
const Product = db.product

exports.findAll = async(req,res,next) => {
    try{
          console.log(Product)
          const products = await Product.findAll()
          console.log(products)
          return res.status(200).json({
            status: 'succsess',
            code:200,
            message:'Success get data all',
            data:products
          })
    }catch(error){
        return next(error)
    }
};
exports.findById = async(req,res,next) => {
    try{
          const { id } = req.params
          const product = await Product.findByPk(id)
          if(!product){
               throw new Error("Produk tidak ada")
          }
      return res.status(200).json({
        status: "Success",
        code: 200,
        message: "success get data detail",
        data: product,
      });
    }catch(error){
        return next(error)
    }
};
exports.add = async(req,res,next) => {
    try{
          const {name,price,image,category,description,size,quantity} = req.body
          const product = await Product.create({
              name:name,
              price:price,
              image:image,
              category:category,
              description:description,
              size:size,
              quantity:quantity
          });
          return res.status(200).json({
            status: 'succsess',
            code:200,
            message:'Success get data all',
            data:product
          })
    }catch(error){
        return next(error)
    }
};
exports.update = async(req,res,next) => {
    try{
          const { name,price,image,category,description,size,quantity} = req.body;
          const {id} = req.params;
          const product = await Product.findByPk(id);

          if (!product) {
            throw new Error("Produk tidak ada");
          }
          await Product.update(
            {
              name:name,
              price:price,
              image:image,
              category:category,
              description:description,
              size:size,
              quantity:quantity

            },
            {
                where: {
                    id:id,
                },
            }
          );
          return res.status(200).json({
            status: 'succsess',
            code:200,
            message:'Success edit data',
          });
    }catch(error){
        return next(error)
    }
};
exports.destroy = async(req,res,next) => {
    try{
          const { id } = req.params;
          await Product.destroy({
            where: {  
                id:id,
            },
          });
          return res.status(200).json({
            status: 'succsess',
            code:200,
            message:'Success delete data',
          })
    }catch(error){
        return next(error);
    }
};



