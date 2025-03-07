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
      },
      setUsernameFromLogIn() {
        const userstore = userDetails()
        return userstore.username
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
        {{ item }}
      </li>
    </ul>
  </div>
</template>
