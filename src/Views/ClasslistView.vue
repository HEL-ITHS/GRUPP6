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
      <p>3A</p>
      <button @click="onClickShowClasses('./public/classList1.json')">
        Lista
      </button>
    </div>

    <div class="classes_name">
      <p>3B</p>
      <button @click="onClickShowClasses('./public/classList2.json')">
        Lista
      </button>
    </div>

    <div class="classes_name">
      <p>3C</p>
      <button @click="onClickShowClasses('./public/classList3.json')">
        Lista
      </button>
    </div>
  </div>

  <div v-if="displayChoosenClass">
    <ShowClasses :class-link="classLink" />
    <button @click="closeClassList" class="cancel_button">Tillbaka</button>
  </div>
</template>
