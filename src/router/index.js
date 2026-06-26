import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/MainContent.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../components/Catalog.vue')
  },
  {
    path: '/catalog/:category',
    name: 'category',
    component: () => import('../components/Catalog.vue'),
    props: true
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../components/ProductCard.vue'),
    props: true
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../components/ServiceCenter.vue'),
    props: true
  },
  {
    path: '/commissioning',
    name: 'commissioning',
    component: () => import('../components/Commissioning.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router