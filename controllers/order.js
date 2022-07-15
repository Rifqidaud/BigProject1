const db = require("../database/models");
const Cart = db.cart 
const Product = db.product
const {Op} = require("sequelize");
const { product } = require("../database/models");
const Order = db.order;
const OrderDetail = db.orderdetail

exports.checkout = async(req,res,next) => {
    try{
          const listcart=req.body.cart

          if(listcart.length==0){
            return res.status(200).json({
                status: 'error',
                code:200,
                message:'No cart select product',
              })
          }
          const cart = await Cart.findAll({
            where:{
                id:{[Op.in] : listcart}
            },
            include:[
               {model:Product, as:'product'}
            ]

          })
          if(cart.length==0){
            return res.status(200).json({
                status: 'succsess',
                code:200,
                message:'No cart',
              })
          }

          var total = 0
          for(c of cart){
            console.log(c)
            total = total + (c.quantity*c.product.price)
          }
          return res.status(200).json({
            status: 'succsess',
            code:200,
            message:'Success get data all',
            data:cart,
            total:total
          })
    }catch(error){
        return next(error)
    }
};

exports.save = async(req,res,next) => {
    try{
        const listcart=req.body.cart

        if(listcart.length==0){
          return res.status(200).json({
              status: 'error',
              code:200,
              message:'No cart select product',
            })
        }
        const cart = await Cart.findAll({
          where:{
              id:{[Op.in] : listcart}
          },
          include:[
             {model:Product, as:'product'}
          ]

        })
        if(cart.length==0){
          return res.status(200).json({
              status: 'succsess',
              code:200,
              message:'No cart',
            })
        }

        var total = 0

        const order = await Order.create({
            status :"new",
            total :quantity,
            user_id:req.user.id
        });

        for(c of cart){
            await OrderDetail.create({
                order_id : order.id,
                product_id: c.product.id,
                price :c.product.price,
                quantity: c.quantity

            })
          total = total + (c.quantity+c.product.price)
        }
          return res.status(200).json({
            status: 'succsess',
            code:200,
            message:'Success to add cart',
          })
    }catch(error){
        return next(error)
    }
    
};

exports.getorder = async(req,res,next) => {
  try{
        console.log(Product)
        const order = await Order.findAll({
          where:{
              user_id:req.user.id
          },
          order:[['id','desc']]
        })
        if(order.length==0){
          return res.status(200).json({
              status: 'succsess',
              code:200,
              message:'No order',
            })
        }
        return res.status(200).json({
          status: 'succsess',
          code:200,
          message:'Success get order all',
          data:order
        })
  }catch(error){
      return next(error)
  }
};
exports.getorderdetail = async(req,res,next) => {
  try{
        const { id } = req.params
        const order = await Order.findOne({
          where:{
              id:id
          },
          include:[
            {
              model:OrderDetail, 
              as:'details',
              include:[
                 {
                  model:Product,
                  as:'product'
                 }
              ]
            }
         ]
        })
        if(!order){
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
