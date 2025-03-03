<script>
  import HeaderStudent from "../components/HeaderStudent.vue"
  import { userDetails} from "../stores/userStorage";
  import HeroContent from "../components/HeroContent.vue"

  export default {
    components: {
      HeaderStudent,
      HeroContent
    },

    computed: {
      displayUserView(){
        const userstore = userDetails()
        console.log('User type:', userstore.userType);
        return userstore.userType;
      },
    },
  }
</script>

<template>
  <HeaderStudent />
  <div v-if="displayUserView === 'student'">
    <HeroContent
    :backgroundImage="'/assets/heroStudent.jpg'"
    :ariaLabel="'Pen and books that are open and ready to be read.'"
    :welcomeHeading="'Välkommen till studentvyn'"
    :pageDescription="'Förbättra dina engelska kunskaper genom att utmana dig själv på quiz med olika svårighetsgrad, ha roligt medan du lär dig och se dina resultat. Du kan även använda lexikon för att söka och lära dig mer om orden.'"/>
    <div class="navigation_options">
      <RouterLink to="/Difficulty">
      <button class="navigation_btns">Gör quiz</button></RouterLink>
      <RouterLink to="/">
      <button class="navigation_btns">Se mina resultat</button>
      </RouterLink>
      <RouterLink to="/lexicon"><button class="navigation_btns">Lexikon</button></RouterLink>
    </div>
  </div>

  <div v-if="displayUserView === 'teacher'">
    <HeroContent
    :backgroundImage="'/assets/heroTeacher.jpg'"
    :ariaLabel="'A corridor in a library, displaying books'"
    :welcomeHeading="'Välkommen till lärarvyn'"
    :pageDescription="'Här har du tillgång till flera funktioner för att underlätta din undervisning. Du kan hantera dina elevers betyg, få en översikt på deras presentationer och framsteg för att kunna identifiera områden där de behöver förbättras. Du kan även använda lexikonet för att snabbt hitta definitioner och förklaringar för olika engelska ord som dina elever kan behöva hjälp med. Välj ett alternativ nedan för att börja!'"/>
    <div class="navigation_options">
      <RouterLink to="/">
      <button class="navigation_btns">Klasslista</button></RouterLink>
      <RouterLink to="/lexicon"><button class="navigation_btns">Lexikon</button></RouterLink>
    </div>
  </div>

</template>
<style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }

  .navigation_options {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3em;
  }

  .navigation_btns {
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

  .navigation_btns:hover {
    background-color: #004276;
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
</style>
