import Vue from 'vue'
import Router from 'vue-router'
import emplist from '@/components/emplist'
import empadd from '@/components/empadd'
import empupdate from '@/components/empupdate'
import empupload from '@/components/empupload'

/*@代表项目更路径 可以理解为src*/
Vue.use(Router)

export default new Router({
	mode :'history',//去掉#号
  routes: [
    {
      path: '/',
      name: 'emplist',
      component: emplist
    },
    {
    	path:'/empadd',
    	component: empadd
    },
    {
    	path:'/empupdate',
    	component: empupdate
    },
    {
    	path:'/upload',
    	component: empupload
    }
  ]
})
