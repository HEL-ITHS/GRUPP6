<script>
  import HeaderAll from '../components/HeaderAll.vue'
  import { userDetails } from '../stores/userStorage'

  export default {
    components: {
      HeaderAll
    },

    computed: {
      feedback() {
        return userDetails().feedback
      }
    },
    methods: {
      removeFeedback(index) {
        userDetails().removeFeedback(index)
      }
    }
  }
</script>

<template>
  <HeaderAll />
  <h1>Kommentarer Från studenter</h1>
  <div v-if="feedback.length > 0">
    <ul>
      <li v-for="(item, index) in feedback" :key="index">
        <strong>Anonym: </strong>"{{ item }}"
        <button @click="removeFeedback(index)">X</button>
      </li>
    </ul>
  </div>
  <RouterLink to="/dashboard">
    <button class="cancel_button">Startsida</button>
  </RouterLink>
</template>

<style scoped>
  h1 {
    text-align: center;
    margin-top: 40px;
    font-size: 3rem;
    font-weight: 700;
    color: #004276;
  }

  div {
    max-width: 900px;
    margin: 50px auto;
    padding: 25px;
    background-color: #004276;
    border-radius: 15px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    animation: bounceIn 1s ease-out;
    border: 3px solid #37a3f6;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    background-color: #ffffff;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      background-color 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    animation: fadeInComment 1s ease forwards;
  }

  li:hover {
    transform: translateY(-7px);
    background-color: #cadbf5;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.6);
  }

  strong {
    font-weight: 500;
  }

  button {
    background-color: #f4503e;
    color: white;
    border: none;
    padding: 10px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      background-color 0.3s ease;
    font-weight: bold;
  }

  button:hover {
    background-color: #c0392b;
    transform: scale(1.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    color: #bdc3c7;
    font-style: italic;
    margin-top: 30px;
    letter-spacing: 2px;
  }
  .cancel_button {
    font-weight: 600;
    color: white;
    background-color: #0e74c2;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 2em;
    transition: background-color 0.3s ease;
    width: 100px;
  }

  .cancel_button:hover {
    background-color: #0e74c2;
    transform: scale(1.1);
  }

  .cancel_button:active {
    background-color: #004276;
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
  .cancel_button:hover {
    background-color: #004276;
    transform: scale(0.98);
  }

  @keyframes bounceIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeInComment {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
