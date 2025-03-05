<script>
  export default {
    data() {
      return {
        selectedClasses: Array(20).fill(null),
        classList: []
      }
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    props: {
      classLink: {
        type: String,
        required: true
      }
    },
    created() {
      this.showSelectedClasses()
    },
    methods: {
      showSelectedClasses() {
        fetch(this.classLink)
          .then((response) => response.json())
          .then((result) => {
            this.classList = result
            console.log('BARN, ShowSelectedfunktion aktiveras')
            console.log('BARN Klasslänken som skickas:', this.classLink)
          })
      },

      close
    }
  }
</script>

<template>
  <div>
    <div v-for="(studentName, index) in classList" :key="index">
      <p>{{ studentName.name }}</p>
    </div>
  </div>
</template>
