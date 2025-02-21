<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  /* methods: {
    onClick() {
      if (this.value !== "") {
      this.$router.push()
      }
    },
  }, */
  methods: {
    onClick() {
      if (this.value === "student") {
        router.push("/student");
      } else if (this.value === "teacher") {
        router.push("/teacher");
      }
    },
  },
};
</script>

<template>
  <form>
    <input placeholder="Namn" required />
    <input placeholder="Lösenord" type="password" required />
    <select>
      <option selected disabled>Välj roll</option>
      <option :value="student">
        <RouterLink to="/student"> Elev </RouterLink>
      </option>
      <option :value="teacher">
        <RouterLink to="/teacher"> Lärare </RouterLink>
      </option>
    </select>
    <button @click="onClick()">Logga in</button>
  </form>
  <div></div>
</template>
