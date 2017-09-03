var routes = require('./handlers/index2.js');
var blog = require('./handlers/blog.js');
var house = require('./handlers/house.js');
// var user = require('./handlers/user.js');
// var movie = require('./handlers/movie.js');

module.exports = function (app) {

  // basic
  // app.get('/', routes.index);
  app.get('/index2', routes.index);

  app.all('/login', notAuthentication);
  app.get('/login', routes.login);
  app.post('/login', routes.doLogin);

  app.get('/logout', authentication);
  app.get('/logout', routes.logout);

  app.get('/home', authentication);
  app.get('/home', routes.home);

  // === movie
  // app.get('/movie/add', movie.movieAdd);
  // app.post('/movie/add', movie.doMovieAdd);
  // app.get('/movie/:name', movie.movieAdd);
  // app.get('/movie/json/:name', movie.movieJSON);

  // === user
  // app.get('/user/add', user.addUser);

  // === blog
  app.get('/blog', blog.home);
  app.get('/blog/home', blog.home);
  app.get('/blog/start', blog.blogStarter);
  app.get('/blog/list', blog.blogList);
  
  // === house
  app.get('/house', house.home);
  app.get('/house/home', house.home);
  app.get('/house/start', house.houseStarter);
  app.get('/house/detail', house.houseDetail);
  app.get('/house/search', house.houseSearch);
};


function authentication(req, res, next) {
  if (!req.session.user) {
    req.session.error = '请先登陆';
    return res.redirect('/login');
  }
  next();
};

function notAuthentication(req, res, next) {
  if (req.session.user) {
    req.session.error = '已登陆';
    return res.redirect('/');
  }
  next();
};