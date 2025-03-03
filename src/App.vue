<script>
import LogInView from "./Views/LogInView.vue";
import DifficultyView from "./Views/DifficultyView.vue";
import FooterAll from "./components/FooterAll.vue";



export default {
  components: {
    LogInView,
    DifficultyView,
    FooterAll
  },
};
</script>

<template>

  <RouterView />
  <FooterAll />

</template>
