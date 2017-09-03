## README.md

#### 安装
* node.js (v8.4.0)
* mysql (>= 5.x)
* yarn 或使用 npm(node 自带)
* mongodb (保存session)

#### 配置
**mongodb**
`app.js`
```javascript
var store = new SessionStore({ url: "mongodb://192.168.99.50:27017/session", });
```

**mysql**
`config.json` 文件
```json
{
  "mysqldb": {
    "test": {
      "uri": "mysql://test:testpass@192.168.99.50:3306/testdb"
    }
  },
}
```

#### 运行
安装下载依赖模块：
`npm install`
或
`yarn install`

初始化MySQL数据库表
`node ./scripts/createBlog.js`
`node ./scripts/createHouse.js`

运行应用
`npm run start`
或
`yarn start`

访问
`http://localhost:3000/`
`http://localhost:3000/house`
`http://localhost:3000/blog`


#### 目录说明
目录结构
```
package.json （项目包的信息）
app.js        (主程序)
bin/www       (启动文件，用于启动app.js)
routes.js     (路由)
routes/       (路由目录)
public/       (公开目录)
views/        (视图目录，视图模板文件等)
models/       (mysql数据model)
handlers/     (处理)
frontend/     (前端界面-界面原型/开发)
scripts/      (相关脚本)
```
