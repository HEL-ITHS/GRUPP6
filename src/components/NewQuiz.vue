<script>
  export default {
    data() {
      return {
        showQuiz: true,
        selectedAnswer: Array(9).fill(null),
        showResults: false,
        quiz: [],
        totalScore: null,
        motivationalQuotes: null
      }
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    props: {
      quizLink: {
        type: String,
        required: true
      }
    },

    created() {
      this.loadMotivationalQuotes()
      this.startQuiz()
    },

    methods: {
      startQuiz() {
        fetch(this.quizLink)
          .then((response) => response.json())
          .then((result) => {
            this.quiz = result
          })
      },

      submitQuiz() {
        if (this.allAnswered) {
          this.totalScore = this.getTotalScore()
          this.showResults = true
          this.showQuiz = false
        }
      },

      getTotalScore() {
        let totalScore = 0
        for (let i = 0; i < this.quiz.length; i++) {
          if (this.selectedAnswer[i] === this.quiz[i].correctAnswer) {
            totalScore++
          }
        }
        return totalScore
      },

      loadMotivationalQuotes() {
        fetch('/motivationalQuotes.json')
          .then((response) => response.json())
          .then((result) => {
            this.motivationalQuotes = result
          })
      },

      restartQuiz() {
        if (this.allAnswered) {
          ;(this.selectedAnswer = Array(9).fill(null)),
            (this.showResults = false),
            (this.showQuiz = true)
        }
      },

      goToInteraction() {
        this.$router.push('/interaction')
      }
    },

    computed: {
      allAnswered() {
        return (
          this.selectedAnswer.length === this.quiz.length &&
          this.selectedAnswer.every((question) => question !== null)
        )
      },

      motivationalQuote() {
        const selected = Math.floor(
          Math.random() * this.motivationalQuotes.length
        )
        return this.motivationalQuotes[selected]
      }
    }
  }
</script>

<template>
  <div v-if="showQuiz">
    <div class="test_text">
      <h1>Quiz</h1>
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
              selectedAnswer[index] === question.correctAnswer ? 'green' : 'red'
          }"
        >
          {{ selectedAnswer[index] }}
        </strong>
      </li>
    </ul>

    <div class="result_message">
      <p class="text_result">
        Ditt totala resultat: {{ totalScore }} av {{ quiz.length }}
      </p>
      <span v-if="totalScore === quiz.length"
        >Grattis, du tillhör quizeliten! Du fick alla rätt!</span
      >
      <span v-else-if="totalScore >= quiz.length * 0.7"
        >Grymt resultat, quizmästare!
      </span>
      <span v-if="totalScore < quiz.length * 0.4"
        >{{ motivationalQuote }}
      </span>
    </div>

    <div class="restart_button">
      <button @click="restartQuiz" :hidden="!allAnswered">Gör om Quiz</button>
    </div>
  </div>
  <button class="opinion_button" @click="goToInteraction">
    Tyck till om provet
  </button>
</template>

<style scoped>
  form {
    background-color: white;
  }

  .test_text {
    display: flex;
    justify-content: center;
    margin-top: 2em;
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
    width: 125px;
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

  .result_message {
    text-align: center;
    padding: 1.3em;
    margin: 3em;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  }

  .text_result {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.1em;
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
