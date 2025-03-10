<script>
  import { RouterLink } from 'vue-router'
  import ShowClasses from '../components/ShowClasses.vue'
  import HeaderAll from '../components/HeaderAll.vue'

  export default {
    components: {
      HeaderAll,
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
        this.chooseClasses = false
      },
      closeClassList() {
        ;(this.chooseClasses = true), (this.displayChoosenClass = false)
      }
    }
  }
</script>

<template>
  <HeaderAll />

  <div v-if="chooseClasses" class="choose_classes">
    <div class="classes_name">
      <p>3A</p>
      <button
        class="classlist_button"
        @click="onClickShowClasses('./public/classList1.json')"
      >
        Klasslista
      </button>
    </div>

    <hr
      style="
        margin-bottom: 2em;
        margin-top: 2em;
        margin-left: 5em;
        margin-right: 5em;
      "
    />

    <div class="classes_name">
      <p>3B</p>
      <button
        class="classlist_button"
        @click="onClickShowClasses('./public/classList2.json')"
      >
        Klasslista
      </button>
    </div>

    <hr
      style="
        margin-bottom: 2em;
        margin-top: 2em;
        margin-left: 5em;
        margin-right: 5em;
      "
    />

    <div class="classes_name">
      <p>3C</p>
      <button
        class="classlist_button"
        @click="onClickShowClasses('./public/classList3.json')"
      >
        Klasslista
      </button>
    </div>
    <RouterLink to="/dashboard">
      <button class="cancel_button">Startsida</button></RouterLink
    >
  </div>

  <div v-if="displayChoosenClass">
    <ShowClasses :class-link="classLink" />
    <button @click="closeClassList" class="cancel_button">Tillbaka</button>
  </div>
</template>

<style scoped>
  .choose_classes {
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
    text-align: center;
    padding: 10px;
  }

  .classes_name p {
    font-size: large;
    margin: 0;
  }

  .classes_name button {
    margin: 0;
  }

  .classlist_button {
    width: 150px;
    background-color: #7ac0f5;
    border: none;
    border-radius: 5px;
    padding: 12px;
    margin-top: 2em;
    transition: transform 0.3s ease;
  }

  .classlist_button:hover {
    background-color: #519fdb;
    transform: scale(1.1);
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
</style>
