# night-kay

React微前端架构方案

夜凯：第八门·死门之后的最终奥义

## 理念

将前端应用由单一的SPA应用转变为多个子应用聚合为一的应用，各个子应用还可以单独开发、测试、部署

应用划分为production和各个子app

### production

处理页面公用部分逻辑，进行子应用的注册

### app

负责自己部分逻辑，注册路由与组件的对应关系

## 使用

```
// production
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

or

```
// production
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
  </Switch>
</Router>
```

## 公共依赖

这部分依赖不在本项目中处理，放到production中去

```
@antv/data-set @antv/g2 antd axios babel-polyfill mobx mobx-react react react-dom react-router-dom
```

## webpack

production负责把公共依赖包打包成vendor

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

production和各app在webpack里配置

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
