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
    <img src="" alt="logga">
    <div></div>
  </header>
  <RouterView />
  <footer>
    <h2>Footer</h2>
  </footer>
</template>
<style>
header {
  background-color: #77b0ff;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

}
header div {
  background-color: blue;
  height: 20px;
  width: 50%;
}
</style>
