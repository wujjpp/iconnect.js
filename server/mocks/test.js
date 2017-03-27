module.exports = function () {
  var urlrouter = require('urlrouter');

  return urlrouter(function (router) {
    var _ = require('underscore');

    //load all tasks
    router.get('/api/test', function (req, res) {
      var count = req.query.count;
      var data = [];
      for (var i = 1; i <= count; ++i) {
        var item = {id: i};
        for (var j = 1; j <= 10; j++) {
          item['column' + j] = 'Data-' + i + '-' + j;
        }
        data.push(item);
      }
      res.end(JSON.stringify(data));
    });
  })
};
