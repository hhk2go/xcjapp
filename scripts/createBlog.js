const models = require('../models');
const Blog = models.Blog;

Blog.sync({ force: true })
  .then(() => {
    return initBlogData();
  })
  .then(() => {
    models.sequelize.close();
  })
  .catch((err) => {
    console.error("Database access error:", err);
    models.sequelize.close();
  });

function initBlogData() {
  var blogsData = [{
    no: 101,
    image: 'blogN.png',
    title: 'MongoDB Guide',
    description: 'MongoDB is no sql database',
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'mongodb',
    likes: 100
  },
  {
    no: 102,
    image: 'blogN.png',
    title: 'NoSQL Database',
    description: "NoSQL database doesn't have tables",
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'database',
    likes: 210,
  },
  {
    no: 103,
    image: 'blogN.png',
    title: 'Python Quick Guide',
    description: "Python Quick start ",
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'Python',
    likes: 30,
  },
  {
    no: 104,
    image: 'blogN.png',
    title: 'Python Quick Guide',
    description: "Python Quick start ",
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'NoSQL',
    likes: 30,
  },
  {
    no: 105,
    image: 'blogN.png',
    title: 'Python Quick Guide',
    description: "Python Quick start ",
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'Mysql',
    likes: 30,
  },
  {
    no: 201,
    image: 'blogN.png',
    title: 'Python Quick Guide',
    description: "Python Quick start ",
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'Python',
    likes: 30,
  },
  {
    no: 202,
    image: 'blogN.png',
    title: 'Python Quick Guide',
    description: "Python Quick start ",
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'MongoDB',
    likes: 30,
  },
  {
    no: 203,
    image: 'blogN.png',
    title: 'Python Quick Guide',
    description: "Python Quick start ",
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'Redis',
    likes: 30,
  },
  {
    no: 204,
    image: 'blogN.png',
    title: 'Python Quick Guide',
    description: "Python Quick start ",
    by: 'yiibai tutorials',
    url: 'http://www.yiibai.com',
    tags: 'MongoDB',
    likes: 30,
  }];


  return Blog.bulkCreate(blogsData);
}
