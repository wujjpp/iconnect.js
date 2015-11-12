module.exports = function () {

  var urlrouter = require('urlrouter');
  var guid = require('lite-guid');
  var _ = require('underscore');

  return urlrouter(function (router) {
    var _ = require('underscore');

    var container = [];

    router.get('/api/storage/:key', function (req, res) {

      if (req.params.key) {
        var result = _.findWhere(container, {key: req.params.key});
        if (result) {
          res.end(JSON.stringify(result.data));
        } else {
          res.end();
        }
      }
      else {
        res.end();
      }

    });

    router.post('/api/storage/:key', function (req, res) {

      if (req.params.key) {
        var result = _.findWhere(container, {key: req.params.key});
        if (result) {
          result.data = req.body;
        } else {
          container.push({key: req.params.key, data: req.body});
        }
      }
      res.end();
    });

    router.delete('/api/storage/:key', function(req, res){
      if(req.params.key) {
        container = _.reject(container, function (o) {
          o.key !== req.params.key;
        });
      }
      res.end();
    });
  });

};
