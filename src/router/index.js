import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/pages/users-list/UsersList'], resolve)
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
