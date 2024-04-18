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
    path: '/psychometrics/:name',
    name: 'Psychometric',
    component: () => import('../views/psychometric.vue')
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
