<script>
import { RouterLink } from 'vue-router';
import HeaderStudent from "../components/HeaderStudent.vue"

export default {
  coponents: {
    HeaderStudent
  },
  data() {
    return {
      showQuiz: true,
      selectedAnswer: Array(9).fill(null),
      showResults: false,
      "quiz": [
    {
      "question": "1. Vilket ord passar in i följande mening: 'I ____ to the store yesterday.'",
      "answers": {
        "a": "go",
        "b": "went",
        "c": "going",
        "d": "gone"
      },
      "correctAnswer": "went"
    },
    {
      "question": "2. Vilket ord passar in i följande mening: 'She ____ a book right now.'",
      "answers": {
        "a": "read",
        "b": "reads",
        "c": "reading",
        "d": "is reading"
      },
      "correctAnswer": "is reading"
    },
    {
      "question": "3. Vilket ord passar in i följande mening: 'They ____ to the park every weekend.'",
      "answers": {
        "a": "go",
        "b": "going",
        "c": "gone",
        "d": "went"
      },
      "correctAnswer": "go"
    },
    {
      "question": "4. Vilket ord passar in i följande mening: 'We ____ a great time at the party.'",
      "answers": {
        "a": "have",
        "b": "had",
        "c": "having",
        "d": "has"
      },
      "correctAnswer": "had"
    },
    {
      "question": "5. Vilket ord passar in i följande mening: 'He ____ to play soccer next weekend.'",
      "answers": {
        "a": "plans",
        "b": "plan",
        "c": "planned",
        "d": "planning"
      },
      "correctAnswer": "plans"
    },
    {
      "question": "6. Vilket ord passar in i följande mening: 'I ____ my homework before dinner.'",
      "answers": {
        "a": "finish",
        "b": "finished",
        "c": "finishing",
        "d": "finishes"
      },
      "correctAnswer": "finished"
    },
    {
      "question": "7. Vilket ord passar in i följande mening: 'They ____ breakfast at 7:30 every morning.'",
      "answers": {
        "a": "eat",
        "b": "eats",
        "c": "ate",
        "d": "eating"
      },
      "correctAnswer": "eat"
    },
    {
      "question": "8. Vilket ord passar in i följande mening: 'She ____ to the music every day.'",
      "answers": {
        "a": "listen",
        "b": "listened",
        "c": "listens",
        "d": "listening"
      },
      "correctAnswer": "listens"
    },
    {
      "question": "9. Vilket ord passar in i följande mening: 'We ____ to visit our grandparents next summer.'",
      "answers": {
        "a": "are",
        "b": "is",
        "c": "were",
        "d": "will be"
      },
      "correctAnswer": "will be"
    }
  ]
}
  },

  methods: {
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
    },
  },
};
</script>

<template>
  <HeaderStudent />

  <div v-if="showQuiz">
    <div class="test_text">
      <h1>Prov Medel</h1>
    </div>
    <div v-for="(question, index) in quiz" :key="index">
      <form class="question_container" @submit.prevent>
        <div class="question">
          <h3>{{ question.question }}</h3>
        </div>
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
    <div class="container_opinion_button">
      <button class="opinion_button">Tyck till om provet</button>
    </div>
  </div>
  <div class="container_cancel_button">
    <RouterLink to="/difficulty">
      <button class="cancel_button">Avsluta</button>
    </RouterLink>
  </div>
  <button @click="goToInteraction">tyck till om provet</button>
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

.questioncontainer {
  padding: 20px;
}

.question {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}

.answer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5em;
  cursor: pointer;
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

.cancel_button {
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #004276;
  padding: 10px;
  margin-left: 1em;
  transition: transform 0.3s ease;
}

.cancel_button:hover {
  background-color: #0e74c2;
  transform: scale(1.1);
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
  margin-left: 1em;
  transition: transform 0.3s ease;
}

.opinion_button:hover {
  background-color: #0e74c2;
  transform: scale(1.1);
}
</style>
