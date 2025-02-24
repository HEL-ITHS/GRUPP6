<script>
import LogInView from "./Views/LogInView.vue";
import StudentView from "./Views/StudentView.vue";
import TeacherView from "./Views/TeacherView.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    LogInView,
    StudentView,
    TeacherView,
    Footer
  },
};
</script>

<template>

  <RouterView />
  <Footer />

</template>
