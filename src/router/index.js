import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Edit from '../views/Edit.vue'
import EditForm from '../components/EditForm.vue'
import DeleteEmp from '../components/DeleteEmp.vue'

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
    path: '/Edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/EditForm',
    name: 'EditForm',
    component: EditForm
  },
  {
    path: '/DeleteEmp',
    name: 'DeleteEmp',
    component: DeleteEmp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
