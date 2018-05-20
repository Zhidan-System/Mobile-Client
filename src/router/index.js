import Vue from 'vue'
import Router from 'vue-router'
import order from '@/components/order'
import checkin from '@/components/checkin'
import confirm from '@/components/confirm'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/order'},
    {path: '/order', component: order},
    {
    	path: '/checkin', 
    	component: checkin
    },
    {path: '/confirm', component: confirm}
  ]
})
