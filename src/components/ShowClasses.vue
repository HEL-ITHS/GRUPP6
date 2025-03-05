<script>
  export default {
    data() {
      return {
        selectedClasses: Array(20).fill(null),
        showClasses: true,
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
      }
    }
  }
</script>

<template>
  <div v-if="showClasses">
    <h3>Klasslista</h3>
    <div v-for="(studentName, index) in classList" :key="index">
      <ul>
        <li>{{ studentName.name }}</li>
        <li>{{ studentName.phone }}</li>
        <li>{{ studentName.address }}</li>
        <li>{{ studentName.email }}</li>
      </ul>
    </div>
  </div>
</template>
