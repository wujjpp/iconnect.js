module.exports = function () {

  var urlrouter = require('urlrouter');
  var guid = require('lite-guid');
  var _ = require('underscore');

  return urlrouter(function (router) {
    var _ = require('underscore');

    var regions = [
      {id: 'us', name: 'USA', flag: 'images/global/flags/us.png'},
      {id: 'sin', name: 'Singapore', flag: 'images/global/flags/sin.png'},
      {id: 'cn', name: 'China', flag: 'images/global/flags/cn.png'},
      {id: 'ca', name: 'Canada', flag: 'images/global/flags/ca.png'},
      {id: 'england', name: 'England', flag: 'images/global/flags/england.png'},
      {id: 'jp', name: 'Japan', flag: 'images/global/flags/jp.png'},
      {id: 'de', name: 'Germany', flag: 'images/global/flags/de.png'}
    ];

    //load all tasks
    router.get('/api/regions', function (req, res) {
        res.end(JSON.stringify(regions));
    });
  });

};
