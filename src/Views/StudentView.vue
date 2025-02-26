<script>
  import HeaderStudent from "../components/HeaderStudent.vue"
  import { userDetails} from "../stores/userStorage";

  export default {
    components: {
      HeaderStudent,
    },
    computed: {
      setUsernameFromLogIn(){
        const userstore = userDetails()
        return userstore.username
      }
    }
  }
</script>

<template>
  <HeaderStudent />
  <div class="hero_content" aria-label= "">
    <section class="hero_text_content">
      <h1>Välkommen till studentvyn </h1>
      <h2> {{ setUsernameFromLogIn }} </h2>
      <p>Förbättra dina engelskkunskaper genom utmana dig själv på quiz med olika svårighetsgrad, se dina resultat och ha roligt medan du lär dig. Du kan även att använda lexikon för att söka och lära dig mer om orden. </p>
    </section>
  </div>
  <div class="student_options">
    <RouterLink to="/Difficulty">
    <button class="student_navigation_btns">Gör quiz</button class="student_navigation_btns"></RouterLink>
    <RouterLink to="/">
    <button class="student_navigation_btns">Se mina resultat</button>
    </RouterLink>
    <RouterLink to="/Lexicon"><button class="student_navigation_btns">Lexikon</button></RouterLink>
  </div>

</template>

<style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }

  .hero_content {
    background:
    linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.5)
    ), url('/assets/Books.jpg');
    height: 50%;
    background-position: center;
    background-size: cover;
    position: relative;
    padding: 3em;
  }

  .hero_text_content {
    color: white;
    text-align: center;
    margin: 2em;
  }

  .student_options {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3em;
  }

  .student_navigation_btns {
    font-weight: 600;
    color: white;
    background-color: #0e74c2;;
    border: none;
    border-radius: 5px;
    padding: 20px;
    margin: 2em;
    transition: background-color 0.3s ease;
    width: 200px;
  }

  .student_navigation_btns:hover {
    background-color: #004276;
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
</style>
