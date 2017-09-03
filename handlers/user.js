// ==== ADD mongodb: add user
var User = require('./../models_mongo/users.js');

// 插入 [user]
exports.addUser = function (req, res) {
  insertUser();
  res.send("insert user");
}; 


// ==== 插入 [user]
function insertUser() {
  var user = new User({
    username: 'Tracy McGrady',
    userpwd: 'abcd',
    userage: 37,
    logindate: new Date()
  });
  user.save(function (err, res) {
    if (err) {
      console.log("[insert] Error:" + err);
    } else {
      console.log("[insert] Res:" + res);
    }
  });
};
