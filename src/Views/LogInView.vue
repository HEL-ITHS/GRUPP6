<script>
import { vModelCheckbox } from "vue";

export default {
  data() {
    return {
      value: "",
      email: "",
      password: "",
      confirmTerms: "",
    };
  },

  methods: {
    onClickLoggin() {
      if (
        this.value === "student" &&
        this.email !== "" &&
        this.password !== "" &&
        this.confirmTerms === true
      ) {
        this.$router.push("/student");
      } else if (
        this.value === "teacher" &&
        this.email !== "" &&
        this.password !== "" &&
        this.confirmTerms === true
      ) {
        this.$router.push("/teacher");
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="onClickLoggin()" class="container mt-5">
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
    <div>
      <input
        v-model="confirmTerms"
        class="form-check-input"
        id="confirmTerms"
        type="checkbox"
        value=""
        required
      />
      <label class="form-check-label" for="confirmTerms">
        Godkänn villkoren</label
      >
    </div>
    <div class="d-flex justify-content-center mb-3">
      <button style="cursor: pointer" type="submit" class="btn btn-primary">
        Logga in
      </button>
    </div>
    <a href="#">Glömt lösenord?</a>
  </form>
</template>

<style scooped>
a {
  color: black;
}
</style>
