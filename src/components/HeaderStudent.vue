<script>
  import { userDetails} from "../stores/userStorage";

  export default {
    computed: {
      setUsernameFromLogIn(){
        const userstore = userDetails()
        return userstore.username
      }
    },
    methods: {
      backToHomeStudent(){
        this.$router.push('/student')
      }
    }
  }

</script>


<template>
  <header class="container_header">
    <img  @click="backToHomeStudent"  src="/assets/Logga.png" alt="Grammify-logo" class="logo">
    <h2 class="header_text">{{ setUsernameFromLogIn }}</h2>
  </header>
</template>

<style scoped>
  .container_header {
    background-color:#004276;
    display: flex;
    align-items: center;
    color: white;
    padding: 1em;
  }

  .logo {
    width: auto;
    height: 120px;
  }
</style>
