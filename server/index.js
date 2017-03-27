// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

module.exports = function (connect, middlewares) {
  var globSync = require('glob').sync;
  var mocks = globSync('./mocks/**/*.js', {cwd: __dirname}).map(require);

  var morgan = require('morgan');

  middlewares.push(connect().use(morgan('dev')));

  middlewares.push(connect.json());

  middlewares.push(connect.query());

  middlewares.push(connect().use( function(req, res, next){
    if(req.query.size) {
      try{
        req.query.size = parseInt(req.query.size);
      }catch(e){
        req.query.size = 10;
      }
    }
    if(req.query.page){
      try{
        req.query.page = parseInt(req.query.page);
      }
      catch(e){
        req.query.page = 1;
      }
    }
    next();
  }));

  mocks.forEach(function (route) {
    middlewares.push(connect().use(route()));
  });

};
