import { createRouter, createWebHashHistory } from "vue-router";
import LogInView from "./Views/LogInView.vue";
import StudentView from "./Views/StudentView.vue";
import TeacherView from "./Views/TeacherView.vue";
import QuizView from "./Views/QuizView.vue";
import InteractionView from "./Views/InteractionView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LogInView,
      path: "/",
    },
    {
      component: QuizView,
      path: "/quiz",
    },

    {
      component: TeacherView,
      path: "/teacher",
    },

    {
      component: StudentView,
      path: "/student"
    },
    {
      component: InteractionView,
      path: "/interaction"
    }

  ],
});
