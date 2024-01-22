// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Products belong to many Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags',  // Use 'tags' as the alias
  foreignKey: 'product_id'
});

// Tags belong to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'products',  // Use 'products' as the alias
  foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
