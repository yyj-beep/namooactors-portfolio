/*npm install vue-router */
import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/components/Home.vue';

import Intro from '@/components/company/Intro.vue';
import History from '@/components/company/History.vue';

import News from '@/components/community/News.vue';
import Notice from '@/components/community/Notice.vue';
import NoticeDetail from '@/components/community/NoticeDetail.vue';

import Actors from '@/components/artist/Artist.vue';
import ArtistDetail from '@/components/artist/ArtistDetail.vue';

import Info from '@/components/audition/Info.vue';
import Faq from '@/components/audition/Faq.vue';




const routes = [
  { path:'/', redirect:'/namooActors' },
  { path:'/namooActors', component:Home }, // 기본 리디렉션

  { path:'/company', component:Intro },
  { path:'/history', component:History },

  { path:'/news', component:News },
  { path:'/notice', component:Notice },
  { path:'/notice/:id', name:'NoticeDetail', component:NoticeDetail },

  { path: '/artist', component:Actors },
  { path:'/artist/:id', name:'ArtistDetail', component:ArtistDetail },

  { path: '/audition', component:Info },
  { path: '/FAQ', component:Faq },

]




const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition){
      if(savedPosition){
        return savedPosition
      }else{
        return{top:0}
      }
    }
})


export default router;