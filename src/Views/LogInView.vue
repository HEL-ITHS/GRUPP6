<script>

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
  <div id="main_container">
    <img src="/assets/Logga.png" alt="logga">

  <form @submit.prevent="onClickLoggin()"
  >
    <div>
      <label for="email"><strong>Email:</strong></label>
      <input
        v-model="email"
        id="email"
        type="email"
        required
      />
    </div>
    <div>
      <label for="password"
        ><strong>Lösenord:</strong></label
      >
      <input
        v-model="password"
        id="password"
        type="password"
        required
      />
    </div>
    <div>
      <label for="typeOfUser" ><strong>Välj:</strong></label>
      <select v-model="value" id="typeOfUser" required>
        <option selected disabled value="">Välj</option>
        <option value="student">Elev</option>
        <option value="teacher">Lärare</option>
      </select>
    </div>
    <div id="checkbox">
      <input
        v-model="confirmTerms"
        id="confirmTerms"
        type="checkbox"
        value=""
        required
      />
      <label for="confirmTerms">
        Godkänn villkoren</label
      >
    </div>
    <div>
      <button>
        Logga in
      </button>
    </div>
    <a href="#">Glömt lösenord?</a>
  </form>
</div>
</template>

<style scoped>
#main_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(180deg, #66b3f2, #004276);
  padding: 20px;
}

img {
  width: 150px;
  margin-bottom: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  background: #f8f8f8;
}

input:focus,
select:focus {
  border-color: #2575fc;
  box-shadow: 0 0 8px rgba(37, 117, 252, 0.3);
  outline: none;
}

#checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
}

#checkbox input {
  width: 18px;
  height: 18px;
  accent-color: #2575fc;
  cursor: pointer;
}

button {
  width: 100%;
  padding: 12px;
  background: #2575fc;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1e63d7;
  transform: scale(1.05);
}

a {
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #2575fc;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}
</style>
