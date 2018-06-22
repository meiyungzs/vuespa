import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['@/pages/index'], resolve)
const parent = resolve => require(['@/pages/parentchild/parent'], resolve)
const login = resolve => require(['@/pages/login'], resolve)
const test = resolve => require(['@/pages/test'], resolve)
const test1 = resolve => require(['@/pages/test/test1'], resolve)
const test2 = resolve => require(['@/pages/test/test2'], resolve)
const params = resolve => require(['@/pages/test/params'], resolve)
// import test2 from '@/pages/test/test2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vuesubdist/',
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
    path: '/hello',
    meta: { title: '你好' },
    name: 'hello',
    component: index
  }, {
    path: '/login',
    meta: { title: '登入' },
    name: 'login',
    component: login
  }, {
    path: '/parent',
    meta: { title: '父子组件-我是父组件' },
    name: 'parent',
    component: parent
  }, {
    path: '/test',
    meta: { title: '测试页面也很霸气' },
    name: 'test',
    component: test,
    children: [{
      path: 'test1',
      meta: { title: '测试页面1', auth: true },
      name: 'test1',
      component: test1
    }, {
      path: 'test2',
      meta: { title: '测试页面2' },
      name: 'test2',
      component: test2
    }, {
      path: 'params',
      meta: { title: '传递参数' },
      name: 'params',
      component: params
    }]
  }, {
    path: '*',
    redirect: '/hello'
  }]
})
