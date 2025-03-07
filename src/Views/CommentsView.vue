<script>
  import HeaderStudent from '../components/HeaderStudent.vue'
  import { userDetails } from '../stores/userStorage'

  export default {
    components: {
      HeaderStudent
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
  <HeaderStudent />
  <h1>Kommentarer Från studenter</h1>
  <div v-if="feedback.length > 0">
    <ul>
      <li v-for="(item, index) in feedback" :key="index">
        <strong>Anonym: </strong>{{ item }}
        <button @click="removeFeedback(index)">Ta bort</button>
      </li>
    </ul>
  </div>
</template>
