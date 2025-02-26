<script>
import LogInView from "./Views/LogInView.vue";
import StudentView from "./Views/StudentView.vue";
import TeacherView from "./Views/TeacherView.vue";
import DifficultyView from "./Views/DifficultyView.vue";
import FooterAll from "./components/FooterAll.vue";


export default {
  components: {
    LogInView,
    StudentView,
    DifficultyView,
    TeacherView,
    FooterAll
  },
};
</script>

<template>

  <RouterView />
  <FooterAll />

</template>
