# 用 express 和 mongodb 搭建 RESTFUL 接口

[TOC]

## 搭建服务器

- ==express==安装
- 引用 express，3000 端口 listen
- nodemon index.js
- .get 方法，设定 get 请求, 测试

## 用 mongoose 连接数据库

- 安装 mongoose
- 新建 `config/database.js`, 引用 mongoose
- 设定 uri,options,Promise

```javascript {.line-numbers}
const uri = "mongodb://localhost:27017/movies";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.Promise = global.Promise;
```

- connect 方法，then,catch
- 导出 mongoose，并在 index.js 引用

## 定义数据 model

- 新建 models 文件夹
- 在文件夹里建立数据模型文件，比如 top250.js
- 引用数据库文件 database.js,用其 SChema 方法构建一个 schema
- 用 model 方法生成一个 Collection 对象 Top250
- 导出 Collection

## 使用模型把数据保存在数据库里（测试）

- 在入口文件`index.js`引用 Collection
- 创建一个 Collection 的实例 top1
- 对 top1 执行 save 方法，用 Promise 测试

## 为数据库写增删改查方法（测试）

- 新建 data 文件夹，把 CRUD 方法分别写在这个文件夹里
- 导入 Collection
- 在 create.js 新建，save 方法
- 在 read.js 查询 find 方法
- 在 update.js 更改 findAndUpdate
- 在 delete.js 删除 findAndRemove

## 设置特定接口写增删改查

- 重新调整目录接口，新建 routes 文件夹写子路由，新建 controllers 文件夹写方法
- `/routes/topRouter.js`里引用 express，执行 Router 方法，返回 router 对象，使用对象的`route`方法
- 测试一下 get post 方法，返回请求，导出 router，**post 方法要使用 bodyparser.json()**
- patch 和 delete 方法需要获取条目 ID，路径为要加上`:id`
- 入口文件里导入 router,用中间件设定新的接口,测试
- 在 controller 里新建 topController.js 文件,在里面用增删改查方法对数据库进行操作，并返回 reponse
- 导出对应方法，并在 router 里引用方法

## 验证用户信息 签发 token

- 新建 user 数据模型，userRouter,userController,并在路由里添加 post 方法 auth
- 安装`brypt`,改写`增加条目`的方法，`bcrypt.hash()`给用户的密码加密
- 在控制器中，书写 auth 方法，现在数据库中 findOne，看看有没有用户名，如果没有，`Promise.reject({ message: "没找到用户" })`
- 如果有用户，用`brypt.compare(请求密码，数据库密码)`，看看是否相同
- 如果相同，安装`jsonwebtoken`,定义 payload 和 secret，用`jwt.sign()`生成 token,并回复
- 如果不同，回复`密码错误 未通过验证`
