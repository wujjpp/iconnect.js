/**
 * Created by Jane on 2015-11-18.
 */


var _ = require('underscore');

function ProductContainer(){
  var products =  [
    {productId: 1, productName: "Chang", unitPrice: 18},
    {productId: 2, productName: "Aniseed Syrup", unitPrice: 19},
    {productId: 3, productName: "Chef Anton's Cajun Seasoning", unitPrice: 10},
    {productId: 4, productName: "Chef Anton's Gumbo Mix", unitPrice: 22},
    {productId: 5, productName: "Grandma's Boysenberry Spread", unitPrice: 21.35},
    {productId: 6, productName: "Uncle Bob's Organic Dried Pears", unitPrice: 25},
    {productId: 7, productName: "Northwoods Cranberry Sauce", unitPrice: 30},
    {productId: 8, productName: "Mishi Kobe Niku", unitPrice: 40},
    {productId: 9, productName: "Ikura", unitPrice: 97},
    {productId: 10, productName: "Queso Cabrales", unitPrice: 31},
    {productId: 11, productName: "Queso Manchego La Pastora", unitPrice: 21},
    {productId: 12, productName: "Konbu", unitPrice: 38},
    {productId: 13, productName: "Tofu", unitPrice: 6},
    {productId: 14, productName: "Genen Shouyu", unitPrice: 23.25},
    {productId: 15, productName: "Pavlova", unitPrice: 15.5},
    {productId: 16, productName: "Alice Mutton", unitPrice: 17.45},
    {productId: 17, productName: "Carnarvon Tigers", unitPrice: 39},
    {productId: 18, productName: "Teatime Chocolate Biscuits", unitPrice: 62.5},
    {productId: 19, productName: "Sir Rodney's Marmalade", unitPrice: 9.2},
    {productId: 20, productName: "Sir Rodney's Scones", unitPrice: 81},
    {productId: 21, productName: "Gustaf's Kn?ckebr?d", unitPrice: 10},
    {productId: 22, productName: "Tunnbr?d", unitPrice: 21},
    {productId: 23, productName: "Guaraná Fantástica", unitPrice: 9},
    {productId: 24, productName: "NuNuCa Nu?-Nougat-Creme", unitPrice: 4.5},
    {productId: 25, productName: "Gumb?r Gummib?rchen", unitPrice: 14},
    {productId: 26, productName: "Schoggi Schokolade", unitPrice: 31.23},
    {productId: 27, productName: "R?ssle Sauerkraut", unitPrice: 43.9},
    {productId: 28, productName: "Thüringer Rostbratwurst", unitPrice: 45.6},
    {productId: 29, productName: "Nord-Ost Matjeshering", unitPrice: 123.79},
    {productId: 30, productName: "Gorgonzola Telino", unitPrice: 25.89},
    {productId: 31, productName: "Mascarpone Fabioli", unitPrice: 12.5},
    {productId: 32, productName: "Geitost", unitPrice: 32},
    {productId: 33, productName: "Sasquatch Ale", unitPrice: 2.5},
    {productId: 34, productName: "Steeleye Stout", unitPrice: 14},
    {productId: 35, productName: "Inlagd Sill", unitPrice: 18},
    {productId: 36, productName: "Gravad lax", unitPrice: 19},
    {productId: 37, productName: "C?te de Blaye", unitPrice: 26},
    {productId: 38, productName: "Chartreuse verte", unitPrice: 263.5},
    {productId: 39, productName: "Boston Crab Meat", unitPrice: 18},
    {productId: 40, productName: "Jack's New England Clam Chowder", unitPrice: 18.4},
    {productId: 41, productName: "Singaporean Hokkien Fried Mee", unitPrice: 9.65},
    {productId: 42, productName: "Ipoh Coffee", unitPrice: 14},
    {productId: 43, productName: "Gula Malacca", unitPrice: 46},
    {productId: 44, productName: "Rogede sild", unitPrice: 19.45},
    {productId: 45, productName: "Spegesild", unitPrice: 9.5},
    {productId: 46, productName: "Zaanse koeken", unitPrice: 12},
    {productId: 47, productName: "Chocolade", unitPrice: 9.5},
    {productId: 48, productName: "Maxilaku", unitPrice: 12.75},
    {productId: 49, productName: "Valkoinen suklaa", unitPrice: 20},
    {productId: 50, productName: "Manjimup Dried Apples", unitPrice: 16.25},
    {productId: 51, productName: "Filo Mix", unitPrice: 53},
    {productId: 52, productName: "Perth Pasties", unitPrice: 7},
    {productId: 53, productName: "Tourtière", unitPrice: 32.8},
    {productId: 54, productName: "Paté chinois", unitPrice: 7.45},
    {productId: 55, productName: "Gnocchi di nonna Alice", unitPrice: 24},
    {productId: 56, productName: "Ravioli Angelo", unitPrice: 38},
    {productId: 57, productName: "Escargots de Bourgogne", unitPrice: 19.5},
    {productId: 58, productName: "Raclette Courdavault", unitPrice: 13.25},
    {productId: 59, productName: "Camembert Pierrot", unitPrice: 55},
    {productId: 60, productName: "Sirop d'érable", unitPrice: 34},
    {productId: 61, productName: "Tarte au sucre", unitPrice: 28.5},
    {productId: 62, productName: "Vegie-spread", unitPrice: 49.3},
    {productId: 63, productName: "Wimmers gute Semmelkn?del", unitPrice: 43.9},
    {productId: 64, productName: "Louisiana Fiery Hot Pepper Sauce", unitPrice: 33.25},
    {productId: 65, productName: "Louisiana Hot Spiced Okra", unitPrice: 21.05},
    {productId: 66, productName: "Laughing Lumberjack Lager", unitPrice: 17},
    {productId: 67, productName: "Scottish Longbreads", unitPrice: 14},
    {productId: 68, productName: "Gudbrandsdalsost", unitPrice: 12.5},
    {productId: 69, productName: "Outback Lager", unitPrice: 36},
    {productId: 70, productName: "Flotemysost", unitPrice: 15},
    {productId: 71, productName: "Mozzarella di Giovanni", unitPrice: 21.5},
    {productId: 72, productName: "R?d Kaviar", unitPrice: 34.8},
    {productId: 73, productName: "Longlife Tofu", unitPrice: 15},
    {productId: 74, productName: "Rh?nbr?u Klosterbier", unitPrice: 10},
    {productId: 75, productName: "Lakkalik??ri", unitPrice: 7.75},
    {productId: 76, productName: "Original Frankfurter grüne So?e", unitPrice: 18}
  ];

  this.getProducts = function(){
    return products;
  };

  this.getProduct = function(productId){

    return _.find(products, function (o) {
      return o.productId == productId;
    });
  };

  this.updateProduct = function(product){
    var instance = this.getProduct(product.productId);
    //Merge data
    return _.extend(instance, product);
  };
}


module.exports = new ProductContainer();
