const Blog = require('../models').Blog;

exports.home = function(req, res) {
  res.render('blog', {
    title: 'Blog Home'
  });
};

exports.blogStarter = function(req, res) {
  res.render('blog_starter', {
    title: 'Blog starter'
  });
};

exports.blogList = function(req, res) {
  // blogData = select from database 
  Blog.findAll({
    'attributes': ['no', 'image', 'title', 'description', 'by'],
  })
  .then((blogs) => {
    res.render('blog_list', {
      title: 'Blog starter',
      blogs: blogs,
    });
  })
  .catch((err) => {
    console.error("Database access error:", err);
  });
};