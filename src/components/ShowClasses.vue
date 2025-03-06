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
          })
      }
    }
  }
</script>

<template>
  <div v-if="showClasses">
    <div class="head_text">
      <h3>Klasslista</h3>
    </div>
    <div class="class_cards">
      <div v-for="(studentName, index) in classList" :key="index">
        <ul>
          <li>{{ studentName.name }}</li>
          <li>{{ studentName.phone }}</li>
          <li>{{ studentName.address }}</li>
          <li>{{ studentName.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .head_text {
    display: flex;
    justify-content: center;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .class_cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  ul {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 20px;
    gap: 10px;
    margin: 10px;
    box-shadow: 2px 2px 2px 2px;
    background-color: lightblue;
    border-radius: 2px;
  }

  li {
    padding: 10px;
    list-style: none;
  }

  @media (max-width: 979px) {
    .class_cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 640px) {
    .class_cards {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
</style>
