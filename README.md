# night-kay

React微前端架构方案

夜凯：第八门·死门之后的最终奥义

## 理念

将前端应用由单一的SPA应用转变为多个子应用聚合为一的应用，各个子应用还可以单独开发、测试、部署

应用划分为product和各个子app

### product

处理页面公用部分逻辑，进行子应用的注册

### app

负责自身业务逻辑逻辑，注册路由与组件的对应关系

## 使用

product与子app在不同项目中时

```
// product
import nightKay from 'night-kay'

nightKay.registerApplication('user', {
  path: '/user',
  entry: 'user.js'
}

// user.js
import nightKay from 'night-kay'

nightKay.registerRoutes('user', [
  {
    path: '/home',
    component: require('bundle-loader?lazy!./container/home')
  },
  {
    path: '/profile',
    component: require('bundle-loader?lazy!./container/profile')
  }
])
```

product与子app在同一项目时（component也可以使用bundle-loader）

```
// product
import nightKay from 'night-kay'

nightKay.registerApplication('user', {
  path: '/user',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})
```

```
import {
  HashRouter as Router,
  Switch
} from 'react-router-dom'

<Router>
  <Switch>
    { nightKay.routes() }
    <Route component={NoMatch} />
  </Switch>
</Router>
```

## 公共依赖

子app的公共依赖放到product中去处理

```
@antv/data-set @antv/g2 antd axios babel-polyfill mobx mobx-react react react-dom react-router-dom
```

### webpack

product负责把公共依赖包打包成vendor

```
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'
import * as MobX from 'mobx'
import * as MobXReact from 'mobx-react'
import * as antd from 'antd'
import G2 from '@antv/g2'
import DataSet from '@antv/data-set'
import axios from 'axios'
import nightKay from 'night-kay'

window.React = React
window.ReactDOM = ReactDOM
window.ReactRouterDOM = ReactRouterDOM
window.MobX = MobX
window.MobXReact = MobXReact
window.antd = antd
window.G2 = G2
window.DataSet = DataSet
window.axios = axios
window.nightKay = nightKay
```

product和各app在webpack里配置

```
externals: {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-router-dom': 'ReactRouterDOM',
  'mobx': 'MobX',
  'mobx-react': 'MobXReact',
  'antd': 'antd',
  '@antv/g2': 'G2',
  '@antv/data-set': 'DataSet',
  'axios': 'axios',
  'night-kay': 'nightKay'
}
```

## 子app构建

### css命名空间

子app会渲染在有`night-kay-app-${name}`类名的容器下

配置postcss的namespace为所有css加上该类名的namespace

### jsonp函数名

各个子app需要配置唯一的webpack jsonp名称

```
output: {
  jsonpFunction: 'webpackJsonp' + Date.now()
}
```

## 权限判断

权限交由各个子app自己判断，可以通过装饰一个permission的HOC，参见[TODO]()

## 其他注意事项

子app从概念上相当于一个独立的项目，即使和product放在同一项目里实现，也不要直接`import`自身文件夹以外的文件，方便日后迁移出去

可以通过`mobx inject`，或者`nightKey.registerModule`来实现对其他模块的访问
