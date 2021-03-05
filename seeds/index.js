const sequelize = require('../config/connection');

const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedTags = require('./tag-seeds');

sequelize
    .sync({ force: true })
    .then(() =>{
        return seedCategories();       
    })
    .then(() =>{
        return seedTags();
    })
    .then(() =>{
        return seedProducts();
    })
    .then(() =>{
        return seedProductTags();
    })
    .then(() => {
        console.log('E-commerce database seeded!');
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });