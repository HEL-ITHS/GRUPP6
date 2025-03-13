<script>
  import { userDetails } from '../stores/userStorage'
  import HeroContent from '../components/HeroContent.vue'
  import HeaderAll from '../components/HeaderAll.vue'

  export default {
    components: {
      HeaderAll,
      HeroContent
    },

    computed: {
      displayUserView() {
        const userstore = userDetails()
        return userstore.userType
      }
    }
  }
</script>

<template>
  <HeaderAll />
  <div v-if="displayUserView === 'student'">
    <HeroContent
      :background-image="'/assets/heroStudent.jpg'"
      :aria-label="'Pen and books that are open and ready to be read.'"
      :welcome-heading="'Välkommen till Elevportalen,'"
      :page-description="'Förbättra dina engelska kunskaper genom att utmana dig själv på quiz med olika svårighetsgrad, ha roligt medan du lär dig och se dina resultat. Du kan även använda lexikon för att söka och lära dig mer om orden.'"
    />
    <div class="navigation_options">
      <RouterLink to="/Difficulty">
        <button class="navigation_buttons">Gör quiz</button></RouterLink
      >
      <RouterLink to="/lexicon"
        ><button class="navigation_buttons">Lexikon</button></RouterLink
      >
    </div>
  </div>

  <div v-if="displayUserView === 'teacher'">
    <HeroContent
      :background-image="'/assets/heroTeacher.jpg'"
      :aria-label="'A corridor in a library, displaying books'"
      :welcome-heading="'Välkommen till lärarportalen'"
      :page-description="'Här har du tillgång till flera funktioner för att underlätta din undervisning. Du kan få en översikt över klasslistan och se elevernas åsikter om quizen. Du har också tillgång till ett lexikon för att snabbt hitta definitioner och förklaringar av engelska ord som kan vara användbara för eleverna. Välj ett alternativ nedan för att komma igång'"
    />
    <div class="navigation_options">
      <RouterLink to="/classlist">
        <button class="navigation_buttons">Klasslista</button></RouterLink
      >
      <RouterLink to="/lexicon"
        ><button class="navigation_buttons">Lexikon</button></RouterLink
      >
      <RouterLink to="/comments"
        ><button class="navigation_buttons">Åsikter</button></RouterLink
      >
    </div>
  </div>
</template>
<style scoped>
  html,
  body {
    height: 100%;
    margin: 0;
  }

  .navigation_options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 3em;
  }

  .navigation_buttons {
    font-weight: 600;
    color: white;
    background-color: #0e74c2;
    border: none;
    border-radius: 5px;
    padding: 20px;
    margin: 2em;
    transition: background-color 0.3s ease;
    width: 200px;
  }

  @media (max-width: 768px) {
    .navigation_options {
      margin: 2em;
      flex-direction: column;
    }

    .navigation_buttons {
      width: 150px;
      padding: 12px;
      margin: 1em;
    }

    .navigation_buttons:active {
      background-color: #004276;
      transform: scale(0.98);
      transition: transform 0.1s ease;
    }
  }
  @media (min-width: 601px) {
    .navigation_buttons:hover {
      background-color: #004276;
      transform: scale(0.98);
      transition: transform 0.1s ease;
    }
  }
</style>
