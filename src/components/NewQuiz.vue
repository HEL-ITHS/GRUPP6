<script>
  import { userDetails } from '../stores/userStorage'

  export default {
    data() {
      return {
        showQuiz: true,
        selectedAnswer: Array(9).fill(null),
        showResults: false,
        quiz: [],
        motivationalQuotes: null,
        passFactor: 0.66
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
          const score = this.getScore()
          userDetails().setScores(score, this.quizLink)

          this.showResults = true
          this.showQuiz = false
        }
      },

      getScore() {
        let score = 0
        for (let i = 0; i < this.quiz.length; i++) {
          if (this.selectedAnswer[i] === this.quiz[i].correctAnswer) {
            score++
          }
        }
        return score
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
        const selectedMotivaionalQuotes = Math.floor(
          Math.random() * this.motivationalQuotes.length
        )
        return this.motivationalQuotes[selectedMotivaionalQuotes]
      },

      previousScore() {
        return userDetails().previousScores[this.quizLink]
      },

      currentScore() {
        return userDetails().currentScores[this.quizLink]
      },

      doneQuizBefore() {
        return this.quizLink in userDetails().previousScores
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
            class="bubble"
            v-for="(answer, key) in question.answers"
            :key="key"
          >
            <input
              class="checkmark"
              type="radio"
              v-model="selectedAnswer[index]"
              :value="answer"
            />
            <span class="bubble_content">{{ answer }}</span>
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

  <div v-if="showResults" class="result_container">
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
        Ditt resultat: {{ currentScore }} av {{ quiz.length }}
      </p>
      <p v-if="doneQuizBefore">
        Föregående resultat: {{ previousScore }} av {{ quiz.length }}
      </p>
      <span v-if="currentScore === quiz.length"
        >Grattis, du tillhör quizeliten! Du fick alla rätt!</span
      >
      <span v-else-if="currentScore >= quiz.length * passFactor"
        >Grymt resultat, quizmästare!
      </span>
      <span v-if="currentScore < quiz.length * passFactor"
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
  .test_text {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }

  .question_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;
  }

  .question {
    display: flex;
    justify-content: center;
    margin-top: 2em;
    align-items: center;
  }

  .answer_container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .bubble {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 45px;
    border-radius: 22px;
    background: #ffcccb;
    cursor: pointer;
    transition: 0.3s;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 10px;
    background-color: #7ac0f5;
    margin-top: 1.5em;
  }

  .bubble input {
    display: none;
  }

  .bubble:has(input:checked) {
    background: #3498db !important;
    color: white;
    border: 3px solid #1f618d;
    box-shadow: 0px 0px 10px rgba(52, 152, 219, 0.8);
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
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

  .result_container {
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
