import { createRouter, createWebHashHistory } from 'vue-router'
import LogInView from './Views/LogInView.vue'
import InteractionView from './Views/InteractionView.vue'
import DifficultyView from './Views/DifficultyView.vue'
import Lexicon from './Views/LexiconView.vue'
import UserDashboard from './Views/UserDashboard.vue'
import Classlist from './Views/ClasslistView.vue'
import CommentsView from './Views/CommentsView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LogInView,
      path: '/'
    },

    {
      component: UserDashboard,
      path: '/dashboard'
    },

    {
      component: InteractionView,
      path: '/interaction'
    },
    {
      component: DifficultyView,
      path: '/difficulty'
    },
    {
      component: Lexicon,
      path: '/lexicon'
    },
    {
      component: Classlist,
      path: '/classlist'
    },
    {
      component: CommentsView,
      path: '/comments'
    }
  ]
})
