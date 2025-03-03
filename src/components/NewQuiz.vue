<script>
  export default {
    data() {
      return {
        showQuiz: true,
        selectedAnswer: Array(9).fill(null),
        showResults: false,
        quiz: []
      }
    },
    props: {
      quizLink: {
        type: String,
        required: true
      }
    },

    created(){
      this.startQuiz()
    },



    methods: {
        startQuiz() {
          fetch (this.quizLink)
          .then((response)=> response.json())
          .then((result)=>{
              this.quiz= result
          })
        },

    submitQuiz() {
      if (this.allAnswered) {
        this.showResults = true;
        this.showQuiz = false;
      }
    },

    restartQuiz() {
      if (this.allAnswered) {
        (this.selectedAnswer = Array(9).fill(null)),
          (this.showResults = false),
          (this.showQuiz = true);
      }
    },
    goToInteraction(){
      this.$router.push('/interaction')
    }
  },

  computed: {
    allAnswered() {
      return (
        this.selectedAnswer.length === this.quiz.length &&
        this.selectedAnswer.every((question) => question !== null)
      );
    }
  }
}
</script>

<template>
  <div v-if="showQuiz">
    <div class="test_text">
      <h1>Prov Enkelt</h1>
    </div>
    <div v-for="(question, index) in quiz" :key="index">
      <form class="question_container" @submit.prevent>
        <div class="question">
          <h3>{{ question.question }}</h3>
        </div>
        <div class="answer_container">
        <label
          class="answer"
          v-for="(answer, key) in question.answers"
          :key="key"
        >
          <input
            class="checkmark"
            type="radio"
            v-model="selectedAnswer[index]"
            :value="answer"
          />
          {{ answer }}
        </label>
      </div>
      </form>
    </div>
    <div class="result_button">
      <button
        class="show_answer_button"
        @click="submitQuiz"
        :disabled="!allAnswered"
      >
        Visa resultat
      </button>
    </div>
  </div>

  <div v-if="showResults" class="result_continer">
    <h2>Resultat</h2>
    <ul>
      <li v-for="(question, index) in quiz" :key="'result' + index">
        <strong>{{ question.question }}</strong
        ><br />
        Rätt svar: <strong>{{ question.correctAnswer }}</strong
        ><br />
        Ditt svar:
        <strong
          :style="{
            color:
              selectedAnswer[index] === question.correctAnswer
                ? 'green'
                : 'red',
          }"
        >
          {{ selectedAnswer[index] }}
        </strong>
      </li>
    </ul>
    <div class="restart_button">
      <button @click="restartQuiz" :hidden="!allAnswered">Gör om Quiz</button>
    </div>

  </div>
  <button class="opinion_button" @click="goToInteraction">tyck till om provet</button>
</template>

<style scoped>
form {
  background-color: white;
}

.test_text {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  text-decoration: underline;
}

.question_container {
  padding: 20px;
}

.question {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  align-items: center;
}

.answer_container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.answer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5em;
  cursor: pointer;
  width: 122px;
}

.checkmark {
  height: 25px;
  width: 25px;
  margin-right: 1em;
}

.show_answer_button {
  border: none;
  border-radius: 5px;
  background-color: #7ac0f5;
  padding: 10px;
}

.show_answer_button:hover {
  background-color: #519fdb;
}

.result_button {
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 4em;
}

.result_continer {
  margin-top: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
}

li {
  margin-top: 2em;
  list-style: none;
}

.restart_button {
  display: flex;
  justify-content: center;
}

.restart_button button {
  transition: transform 0.3s ease;
  background-color: #7ac0f5;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 2em;
}

.restart_button button:hover {
  background-color: #519fdb;
  transform: scale(1.1);
}

.container_opinion_button {
  margin-bottom: 1em;
}

.opinion_button {
  margin-top: 1em;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #004276;
  padding: 10px;
  margin: 1em;
  transition: transform 0.3s ease;
}

.opinion_button:hover {
  background-color: #0e74c2;
  transform: scale(1.1);
}
</style>
