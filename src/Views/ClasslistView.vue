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
        classLink: ''
      }
    },
    mounted() {
      window.scrollTo(0, 0)
    },

    methods: {
      onClickShowClasses(classLink) {
        this.classLink = classLink
      }
    }
  }
</script>

<template>
  <HeaderStudent />

  <div class="chooseClasses">
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

  <div>
    <ShowClasses :class-link="classLink" />
  </div>
</template>
