<script>
import LogInView from "./Views/LogInView.vue";
import StudentView from "./Views/StudentView.vue";
import TeacherView from "./Views/TeacherView.vue";

export default {
  components: {
    LogInView,
    StudentView,
    TeacherView,
  },
};
</script>

<template>
  <header>
    <h2>Header</h2>
  </header>
  <RouterView />
  <footer>
    <h2>Footer</h2>
  </footer>
</template>
