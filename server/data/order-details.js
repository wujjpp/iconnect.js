/**
 * Created by Jane on 2015-11-17.
 */

var products = require('../data/products');
var _ = require('underscore');

function OrderDetailContainer(){
  var orderDetails = [
    {"detailId":"1","orderId":"1","productId":"1","quantity":1},
    {"detailId":"2","orderId":"1","productId":"2","quantity":2},
    {"detailId":"3","orderId":"1","productId":"3","quantity":3},
    {"detailId":"4","orderId":"1","productId":"4","quantity":4},
    {"detailId":"5","orderId":"1","productId":"5","quantity":5},
    {"detailId":"6","orderId":"1","productId":"6","quantity":6},
    {"detailId":"7","orderId":"2","productId":"1","quantity":7},
    {"detailId":"8","orderId":"2","productId":"2","quantity":8},
    {"detailId":"9","orderId":"2","productId":"3","quantity":9},
    {"detailId":"10","orderId":"3","productId":"4","quantity":10},
    {"detailId":"11","orderId":"3","productId":"5","quantity":11},
    {"detailId":"12","orderId":"3","productId":"6","quantity":12},
    {"detailId":"13","orderId":"3","productId":"10","quantity":13},
    {"detailId":"14","orderId":"4","productId":"11","quantity":1},
    {"detailId":"15","orderId":"4","productId":"12","quantity":2},
    {"detailId":"16","orderId":"4","productId":"13","quantity":3},
    {"detailId":"17","orderId":"4","productId":"14","quantity":4},
    {"detailId":"18","orderId":"5","productId":"5","quantity":5},
    {"detailId":"19","orderId":"5","productId":"5","quantity":6},
    {"detailId":"20","orderId":"5","productId":"6","quantity":7},
    {"detailId":"21","orderId":"5","productId":"7","quantity":8},
    {"detailId":"22","orderId":"6","productId":"7","quantity":9},
    {"detailId":"23","orderId":"6","productId":"8","quantity":10},
    {"detailId":"24","orderId":"6","productId":"8","quantity":11},
    {"detailId":"25","orderId":"6","productId":"8","quantity":12},
    {"detailId":"26","orderId":"6","productId":"26","quantity":13},
    {"detailId":"27","orderId":"7","productId":"27","quantity":14},
    {"detailId":"28","orderId":"7","productId":"28","quantity":15},
    {"detailId":"29","orderId":"7","productId":"29","quantity":16},
    {"detailId":"30","orderId":"7","productId":"30","quantity":1},
    {"detailId":"31","orderId":"8","productId":"31","quantity":2},
    {"detailId":"32","orderId":"8","productId":"32","quantity":3},
    {"detailId":"33","orderId":"8","productId":"33","quantity":4},
    {"detailId":"34","orderId":"8","productId":"34","quantity":5},
    {"detailId":"35","orderId":"8","productId":"35","quantity":6},
    {"detailId":"36","orderId":"9","productId":"36","quantity":7},
    {"detailId":"37","orderId":"9","productId":"37","quantity":8},
    {"detailId":"38","orderId":"9","productId":"38","quantity":9},
    {"detailId":"39","orderId":"9","productId":"39","quantity":10},
    {"detailId":"40","orderId":"10","productId":"40","quantity":11},
    {"detailId":"41","orderId":"10","productId":"41","quantity":12},
    {"detailId":"42","orderId":"11","productId":"42","quantity":13},
    {"detailId":"43","orderId":"11","productId":"43","quantity":14},
    {"detailId":"44","orderId":"12","productId":"44","quantity":15},
    {"detailId":"45","orderId":"12","productId":"45","quantity":16},
    {"detailId":"46","orderId":"13","productId":"46","quantity":17},
    {"detailId":"47","orderId":"14","productId":"47","quantity":18},
    {"detailId":"48","orderId":"15","productId":"48","quantity":19},
    {"detailId":"49","orderId":"16","productId":"49","quantity":20},
    {"detailId":"50","orderId":"17","productId":"50","quantity":21},
    {"detailId":"51","orderId":"18","productId":"51","quantity":22},
    {"detailId":"52","orderId":"19","productId":"52","quantity":23},
    {"detailId":"53","orderId":"20","productId":"53","quantity":24},
    {"detailId":"54","orderId":"20","productId":"54","quantity":25},
    {"detailId":"55","orderId":"20","productId":"55","quantity":26},
    {"detailId":"56","orderId":"20","productId":"56","quantity":27},
    {"detailId":"57","orderId":"20","productId":"57","quantity":28},
    {"detailId":"58","orderId":"20","productId":"58","quantity":29},
    {"detailId":"59","orderId":"21","productId":"59","quantity":1},
    {"detailId":"60","orderId":"21","productId":"60","quantity":2},
    {"detailId":"61","orderId":"21","productId":"61","quantity":3},
    {"detailId":"62","orderId":"21","productId":"62","quantity":4},
    {"detailId":"63","orderId":"21","productId":"63","quantity":5},
    {"detailId":"64","orderId":"21","productId":"64","quantity":6},
    {"detailId":"65","orderId":"22","productId":"65","quantity":7},
    {"detailId":"66","orderId":"22","productId":"66","quantity":8},
    {"detailId":"67","orderId":"22","productId":"67","quantity":9},
    {"detailId":"68","orderId":"22","productId":"68","quantity":10},
    {"detailId":"69","orderId":"22","productId":"69","quantity":11},
    {"detailId":"70","orderId":"22","productId":"70","quantity":12},
    {"detailId":"71","orderId":"23","productId":"71","quantity":1},
    {"detailId":"72","orderId":"23","productId":"72","quantity":2},
    {"detailId":"73","orderId":"23","productId":"73","quantity":3},
    {"detailId":"74","orderId":"23","productId":"74","quantity":4},
    {"detailId":"75","orderId":"24","productId":"75","quantity":5},
    {"detailId":"76","orderId":"24","productId":"76","quantity":6}
  ];

  this.getOrderDetails = function(orderId){
    var details = _.filter(orderDetails, function(o){
      return o.orderId == orderId;
    });

    var data = [];
    _.each(details, function(o){
      var product = products.getProduct(o.productId);
      if(product){
        var tmp = _.extend({}, product);
        tmp = _.extend(tmp, o);
        data.push(tmp);
      }
    });

    return data;
  };

  this.deleteByOrderId = function(orderId){
    orderDetails = _.filter(orderDetails, function(o){
      o.orderId != orderId;
    });
  };

  this.insert = function(orderDetail){
    orderDetails.push(orderDetail);
  };

  this.update = function(orderDetail) {
    var instance = _.find(orderDetails, function (o) {
      return o.detailId === orderDetail.detailId;
    });
    if (instance) {
      instance.quantity = orderDetail.quantity;
    }
    return instance;
  };

  this.remove = function(orderDetail){
    orderDetails = _.filter(orderDetails, function(o){
      return o.detailId != orderDetail.detailId;
    });
  };
}

module.exports = new OrderDetailContainer();

