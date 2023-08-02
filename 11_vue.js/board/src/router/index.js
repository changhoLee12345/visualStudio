import Vue from 'vue'
import Router from 'vue-router'
import BoardList from '@/components/BoardList'
import BoardRead from '@/components/BoardRead'
import BoardWrite from '@/components/BoardWrite'
import BoardBoom from '@/components/BoardBoom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Main',
    component: BoardBoom
  }, {
    path: '/boardList',
    name: 'BoardList',
    component: BoardList
  }, {
    path: '/boardRead/:title',
    name: 'BoardRead',
    component: BoardRead
  }, {
    path: '/boardWrite',
    name: 'BoardWrite',
    component: BoardWrite
  }, {
    path: '*',
    redirect: '/'
  }]
})