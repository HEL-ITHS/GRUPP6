import { createRouter, createWebHashHistory } from "vue-router";

import LogInView from "./Views/LogInView.vue";
import StudentView from "./Views/StudentView.vue";
import TeacherView from "./Views/TeacherView.vue";

export default createRouter({
  history: createWebHashHistory,
  routes: [
    {
      component: "LogInView",
      path: "/",
    },
    { component: "StudentView", path: "/student" },
    {
      component: "TeacherView",
      path: "/teacher",
    },
  ],
});
