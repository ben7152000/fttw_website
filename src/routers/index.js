import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/psychometrics'
  },
  // {
  //   path: '/pilot-assessments',
  //   name: 'PilotAssessments',
  //   component: () => import('../views/pilotAssessments.vue')
  // },
  {
    path: '/psychometrics',
    name: 'Psychometrics',
    component: () => import('../views/psychometrics.vue')
  },
  {
    path: '/psychometrics/direction/:name',
    name: 'Direction',
    component: () => import('../views/direction.vue')
  },
  {
    path: '/psychometrics/game/:name',
    name: 'Game',
    component: () => import('../views/game.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
