import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks',
      name: 'TasksIndex',
      component: () => import("../views/tasks/TasksIndex.vue")
    },
    {
      path: '/tasks/store',
      name: 'TasksStore',
      component: () => import("../views/tasks/TasksStore.vue")
    },
    {
      path: '/tasks/:id/edit',
      name: 'TasksUpdate',
      component: () => import('../views/tasks/TasksUpdate.vue'),
      props: true,
    }
  ]
})

export default router
