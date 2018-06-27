import Vue from 'vue'
import Router from 'vue-router'
import order from '@/components/order'
import checkin from '@/components/checkin'
import confirm from '@/components/confirm'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/desk/1/restaurant/1'},
    {
    	path: '/desk/:did/restaurant/:rid',
    	component: order
    	// ,
    	// children:[
    	// 	{path: '/desk/:did/restaurant/:rid/checkin', component: checkin}
    	// ]
    },
    {
    	path: '/checkin',
    	component: checkin
    }
    // {path: '/confirm', component: confirm}
  ]
})
