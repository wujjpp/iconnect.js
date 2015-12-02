module.exports = function () {

  var urlrouter = require('urlrouter');
  var guid = require('lite-guid');
  var _ = require('underscore');

  var orderContainer = require('../data/orders');

  return urlrouter(function (router) {
    router.get('/api/orders', function (req, res) {


      var pageSize = req.query.size;
      var pageIndex = req.query.page;

      if (pageSize == undefined) {
        pageSize = 10;
      }
      if (pageIndex == undefined) {
        pageIndex = 1;
      }

      //just copy data
      var filtered = orderContainer.getOrders();
      //search by companyName
      if (req.query.companyName && req.query.companyName !== '') {
        filtered = _.filter(filtered, function (item) {
          return item.companyName.indexOf(req.query.companyName) != -1;
        });
      }

      //search by contactName
      if (req.query.contactName && req.query.contactName !== '') {
        filtered = _.filter(filtered, function (item) {
          return item.contactName.indexOf(req.query.contactName) != -1;
        });
      }

      //sorting
      if (req.query.sortKey && req.query.sortOrder) {
        filtered = _.sortBy(filtered, req.query.sortKey);

        if (req.query.sortOrder === 'desc') {
          filtered = _.chain(filtered)
            .map(function (o, n) {
              o.rowIndex = n;
              return o;
            })
            .sortBy(function (o) {
              return 0 - o.rowIndex;
            })
            .map(function (o) {
              return _.omit(o, 'rowIndex')
            }).value();
        }
      }

      var returnedData = {
        count: filtered.length
      };

      //processing paging
      filtered = _.filter(filtered, function (element, index) {
        return (index >= pageSize * (pageIndex - 1)) && (index < pageSize * pageIndex);
      });

      returnedData.data = filtered;

      res.end(JSON.stringify(returnedData));
    });

    router.get('/api/orders/:orderId', function (req, res) {
      var order = _.chain(orderContainer.getOrders()).find(function (o) {
        return o.orderId == req.params.orderId
      }).value();
      res.end(JSON.stringify(order));
    });

    router.delete('/api/orders/:orderId', function (req, res) {
      orderContainer.deleteOrder(req.params.orderId);
      res.end();
    });

    //create
    router.post('/api/orders', function (req, res) {
      var data = orderContainer.createOrUpdateOrder(req.body);
      res.end(JSON.stringify(data));
    });

    //update
    router.put('/api/orders/:id', function (req, res) {
      var data = orderContainer.createOrUpdateOrder(req.body);
      res.end(JSON.stringify(data));
    });
  });
};
