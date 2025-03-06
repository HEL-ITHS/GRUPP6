<script>
  import HeaderStudent from '../components/HeaderStudent.vue'
  import ShowClasses from '../components/ShowClasses.vue'

  export default {
    components: {
      HeaderStudent,
      ShowClasses
    },
    data() {
      return {
        classLink: '',
        displayChoosenClass: false,
        chooseClasses: true
      }
    },
    mounted() {
      window.scrollTo(0, 0)
    },

    methods: {
      onClickShowClasses(classLink) {
        this.classLink = classLink
        this.displayChoosenClass = true
        console.log('FÖRÄLDER')
        console.log('FÖRÄLDER, Klasslänken:', this.classLink)
        this.chooseClasses = false
      },
      closeClassList() {
        ;(this.chooseClasses = true), (this.displayChoosenClass = false)
      }
    }
  }
</script>

<template>
  <HeaderStudent />

  <div v-if="chooseClasses" class="chooseClasses">
    <div class="classes_name">
      <h4>3A</h4>
      <button @click="onClickShowClasses('./public/classList1.json')">
        Klasslista
      </button>
    </div>

    <hr
    style="
        margin-bottom: 2em;
        margin-top: 2em;
        margin-left: 5em;
        margin-right: 5em;
      " />

    <div class="classes_name">
      <h4>3B</h4>
      <button @click="onClickShowClasses('./public/classList2.json')">
        Klasslista
      </button>
    </div>

    <hr
    style="
        margin-bottom: 2em;
        margin-top: 2em;
        margin-left: 5em;
        margin-right: 5em;
      " />

    <div class="classes_name">
      <h4>3C</h4>
      <button @click="onClickShowClasses('./public/classList3.json')">
        Klasslista
      </button>
    </div>
  </div>

  <div v-if="displayChoosenClass">
    <ShowClasses :class-link="classLink" />
    <button @click="closeClassList" class="cancel_button">Tillbaka</button>
  </div>

  <button @click="goToHome">Startsida</button>
</template>

<style scoped>

.chooseClasses {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 2em;
    margin-bottom: 2em;
}

.classes_name {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.classes_name p {
    margin: 0;
}

button {
    margin-top: 1em;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #004276;
  padding: 10px;
  margin-left: 1em;
  transition: transform 0.3s ease;
}

button:hover {
    background: #004276;
    transform: scale(0.98);
  }
</style>
