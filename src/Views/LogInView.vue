<script>
export default {
  data() {
    return {
      value: "",
      email: "",
      password: "",
    };
  },

  methods: {
    onClick() {
      if (
        this.value === "student" &&
        this.email !== "" &&
        this.password !== ""
      ) {
        this.$router.push("/student");
      } else if (
        this.value === "teacher" &&
        this.email !== "" &&
        this.password !== ""
      ) {
        this.$router.push("/teacher");
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="onClick()" class="container mt-5">
    <div class="mb-3">
      <label for="email" class="form-label"><strong>Email:</strong></label>
      <input
        v-model="email"
        id="email"
        class="form-control"
        type="email"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label"
        ><strong>Lösenord:</strong></label
      >
      <input
        v-model="password"
        id="password"
        class="form-control"
        type="password"
        required
      />
    </div>
    <div class="mb-3">
      <label for="typeOfUser" class="form-label"><strong>Välj:</strong></label>
      <select v-model="value" id="typeOfUser" class="form-select" required>
        <option selected disabled value="">Välj</option>
        <option value="student">Elev</option>
        <option value="teacher">Lärare</option>
      </select>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <button type="submit" class="btn btn-primary">Logga in</button>
    </div>
  </form>
</template>
