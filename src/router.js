import { createRouter, createWebHashHistory } from "vue-router";
import LogInView from "./Views/LogInView.vue";
import StudentView from "./Views/StudentView.vue";
import TeacherView from "./Views/TeacherView.vue";
import InteractionView from "./Views/InteractionView.vue";
import DifficultyView from "./Views/DifficultyView.vue";
import Lexicon from "./Views/LexiconView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LogInView,
      path: "/",
    },

    {
      component: TeacherView,
      path: "/teacher",
    },

    {
      component: StudentView,
      path: "/student",
    },
    {
      component: InteractionView,
      path: "/interaction",
    },
    {
      component: DifficultyView,
      path: "/difficulty",
    },
    {
      component: Lexicon,
      path: "/lexicon",
    },
  ],
});
