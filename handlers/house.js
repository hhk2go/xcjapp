const House = require('../models').House;

exports.home = function (req, res) {
  res.render('house', {
    title: 'House Home'
  });
};

exports.houseStarter = function (req, res) {
  res.render('house_starter', {
    title: 'House Starter'
  });
};

exports.houseDetail = function (req, res) {
  res.render('house_detail', {
    title: 'House Detail'
  });
};

exports.houseSearch = function (req, res) {
  House.findAll({
    'attributes': ['name', 'price', 'prov', 'city', 'district', 'area'],
    'where': {
      'city': ['南京', '南通'],
      'transtype': 'A'
    }
  })
  .then(houses => {
    console.log("[House.findAll()]");
    // res.send(JSON.stringify(houses));
    res.render('house_search', {
      title: 'House Search',
      houseList: houses
    });
  })
  .catch((err) => {
    console.error("Database access error:", err);
    res.render('err');
  });
};