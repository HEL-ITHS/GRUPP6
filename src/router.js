import { createRouter, createWebHashHistory } from "vue-router";
import LogInView from "./Views/LogInView.vue";
import StudentView from "./Views/StudentView.vue";
import TeacherView from "./Views/TeacherView.vue";
import StudentDashboard from "./Views/StudentDashboard.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LogInView,
      path: "/",
    },
    {
      component: StudentView,
      path: "/quiz",
    },

    {
      component: TeacherView,
      path: "/teacher",
    },

    {
      component: StudentDashboard,
      path: "/student"
    }

  ],
});
