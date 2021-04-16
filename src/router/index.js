import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import EditForm from '../components/EditForm.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Add',
    name: 'Add',
    component: Add
  }, 
  {
    path: '/EditForm',
    name: 'EditForm',
    component: EditForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
