var express = require('express');
var path = require('path');
var router = express.Router();
var product = require('../models/product');
var passport = require('passport');

var csrf = require('csurf');
var Cart = require('../models/cart');




/* GET home page. */

router.use('/',express.static(path.join(__dirname,'../public')));

router.get('/add-to-cart/:id',function(req,res,next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {items : {}, totalQty : 0, totalPrice : 0});
  product.findById(productId,function(err,item){
    if(err) throw err;
    cart.add(item,item.id);
    req.session.cart = cart;
    //console.log(req.session.cart);
    res.redirect('/');
  })
})

router.get("/shopping-cart",function(req,res,next){
  if(!req.session.cart){
    res.render('shop/shopping_cart',{product : null});
  }
  var cart = new Cart(req.session.cart);
  var arr = cart.generateArray();
  console.log(arr);
  //console.log(cart);
  res.render('shop/shopping_cart',{product : cart.generateArray() , total : cart.totalPrice});

})


module.exports = router;
