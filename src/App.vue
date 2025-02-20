<script>
  import LogInView from "./Views/LogInView.vue";
  import StudentView from "./Views/StudentView.vue";
  import StudentView from "./Views/StudentView.vue";
  import TeacherView from "./Views/TeacherView.vue";

  export default {
    components: {
      LogInView,
      StudentView,
      TeacherView
    }
  };
</script>

<template>
  <LogInView />
  <RouterView />
</template>
