module.exports = function () {

  var urlrouter = require('urlrouter');
  var guid = require('lite-guid');
  var _ = require('underscore');

  return urlrouter(function (router) {
    var _ = require('underscore');

    /*

    var orders = [
      {id: guid.create(), taskName: '1# Bugs', isCompleted: false, updateTime: ''},
      {id: guid.create(), taskName: 'Development', isCompleted: true, updateTime: ''},
      {id: guid.create(), taskName: 'Testing', isCompleted: false, updateTime: ''}
    ];


    var filter = function (id) {
      return _.find(data, function (o) {
        return o.id == id;
      });
    };

    //load all tasks
    router.get('/api/tasks', function (req, res) {
      //res.end(JSON.stringify(data));

      setTimeout(function () {
        res.end(JSON.stringify(data));
      }, 1500);
    });

    //load task by id
    router.get('/api/tasks/:id', function (req, res) {
      res.end(JSON.stringify(filter(req.params.id)));
    });

    //create task
    router.post('/api/tasks', function (req, res) {
      var putData = req.body;

      _.extend(putData, {id: guid.create(), isCompleted: false});
      data.push(putData);

      setTimeout(function () {
        res.end(JSON.stringify(putData));
      }, 1000);
    });

    //update task
    router.put('/api/tasks/:id', function (req, res) {
      //Load data from array
      var instance = filter(req.params.id);
      //Load data from request
      var putData = req.body;
      //Merge data
      _.extend(instance, putData);
      instance.updateTime = new Date().toString();
      setTimeout(function () {
        res.end(JSON.stringify(instance));
      }, 1000);

    });

    //delete task
    router.delete('/api/tasks/:id', function (req, res) {
      data = _.filter(data, function (o) {
        return o.id != req.params.id;
      });
      setTimeout(function () {
        res.end();
      }, 1000);

    });

    */

  });
};
