import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ListenPage from './views/ListenPage.vue'
import FaqPage from './views/FaqPage.vue'
import PrivacyPolicyPage from './views/PrivacyPolicyPage.vue'
import WatchPage from './views/WatchPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/watch', name: 'watch', component: WatchPage },
    { path: '/watch/:id', name: 'watch-id', component: WatchPage },
    { path: '/playlist', name: 'playlist', component: WatchPage },
    { path: '/channel/:id', name: 'channel-id', component: WatchPage },
    { path: '/c/:id', name: 'c-id', component: WatchPage },
    { path: '/listen', name: 'listen', component: ListenPage },
    { path: '/faq', name: 'faq', component: FaqPage },
    { path: '/privacy', name: 'privacy', component: PrivacyPolicyPage },
    { path: '/privacy-policy', redirect: '/privacy' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})
