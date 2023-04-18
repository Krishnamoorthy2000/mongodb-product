// 1.Find all the information about each products

   db.productlist.find({}).pretty();

// 2.Find the product price which are between 400 to 800

   db.productlist.find({product_price:{$gt:400,$lt:800}});

// 3.Find the product price which are not between 400 to 600
   
   db.productlist.find({product_price:{$not:{$gt:400,$lt:600}}});

// 4.List the four product which are grater than 500 in price 

   db.productlist.find({ product_price: { $gte: 500 } }).limit(4);

// 5.Find the product name and product material of each products

  db.productlist.find({}, { product_name: 1, product_material: 1 });
  
// 6.Find the product with a row id of 10

  db.productlist.find({ id: "10" });

// 7.Find only the product name and product material

  db.productlist.find({}, { product_name: 1, product_material: 1, _id: 0 });

// 8.Find all products which contain the value of soft in product material 

  db.productlist.find({ product_material: "Soft" }, { product_material: 1 });

// 9.Find products which contain product color indigo  and product price 492.00

db.productlist.find({$or:[{product_color:"indigo"},{product_price:492.00}]});

// 10.Delete the products which product price value are same


db.productlist.aggregate([ { $group: { _id: "$product_price", Same_price_id: { $push: "$_id" }, count: { $count: {} } } }, { $match: { count: 2 } }])
db.productlist.deleteMany({product_price:{$in:[36,47]}});


 







  



