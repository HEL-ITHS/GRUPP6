<script>
  import { userDetails} from "../stores/userStorage";

  export default {
    computed: {
      displayUsername(){
        const userstore = userDetails()
        return userstore.username
      },

      userTypeInSwedish(){
        const userType = userDetails().userType
        const translations = {
          student: "Student",
          teacher: "Lärare"
        };
        return translations[userType] || userType
      }
    },
    methods: {
      backToHomeStudent(){
        this.$router.push('/dashboard')
      }
    }
  }

</script>


<template>
  <header class="container_header">
    <img  @click="backToHomeStudent"  src="/assets/Logga.png" alt="Grammify-logo" class="logo">
    <div class="header_text_container">
      <h2 class="header_user_title">{{ userTypeInSwedish }}</h2>
      <p class="header_user_status">Inloggad som: {{ displayUsername }}</p>
    </div>
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

  .header_text_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .header_user_title,
  .header_text {
    margin: 0;
  }

  @media (max-width: 768px) {
  .logo {
    height: 80px;
  }

  .header_user_title{
    font-size: 1.5em
  }

  .header_user_status {
    font-size: 1em
  }
}

</style>
