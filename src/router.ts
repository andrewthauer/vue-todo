import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

import Home from './views/Home.vue'
import Items from './views/ItemList.vue'
import NotFound from './views/NotFound.vue'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/items',
    component: Items,
  },
  {
    path: '*',
    redirect: '',
  },
]

export default new VueRouter({ routes })
