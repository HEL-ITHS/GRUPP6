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
      "question": "1. Vilken ordklass har ordet 'quickly' i följande mening: 'She runs quickly.'?",
      "answers": {
        "a": "Noun",
        "b": "Adverb",
        "c": "Adjective",
        "d": "Verb"
      },
      "correctAnswer": "Adverb"
    },
    {
      "question": "2. Vilken ordklass har ordet 'beautiful' i följande mening: 'The flower is beautiful.'?",
      "answers": {
        "a": "Verb",
        "b": "Adverb",
        "c": "Adjective",
        "d": "Noun"
      },
      "correctAnswer": "Adjective"
    },
    {
      "question": "3. Vilken ordklass har ordet 'cat' i följande mening: 'The cat is sleeping.'?",
      "answers": {
        "a": "Adverb",
        "b": "Verb",
        "c": "Noun",
        "d": "Adjective"
      },
      "correctAnswer": "Noun"
    },
    {
      "question": "4. Vilken ordklass har ordet 'quick' i följande mening: 'He is a quick runner.'?",
      "answers": {
        "a": "Adjective",
        "b": "Noun",
        "c": "Verb",
        "d": "Adverb"
      },
      "correctAnswer": "Adjective"
    },
    {
      "question": "5. Vilken ordklass har ordet 'to' i följande mening: 'I want to go to the store.'?",
      "answers": {
        "a": "Preposition",
        "b": "Adverb",
        "c": "Conjunction",
        "d": "Verb"
      },
      "correctAnswer": "Preposition"
    },
    {
      "question": "6. Vilken ordklass har ordet 'quickly' i följande mening: 'She quickly left the room.'?",
      "answers": {
        "a": "Adverb",
        "b": "Adjective",
        "c": "Noun",
        "d": "Verb"
      },
      "correctAnswer": "Adverb"
    },
    {
      "question": "7. Vilken ordklass har ordet 'and' i följande mening: 'She likes tea and coffee.'?",
      "answers": {
        "a": "Verb",
        "b": "Conjunction",
        "c": "Adverb",
        "d": "Preposition"
      },
      "correctAnswer": "Conjunction"
    },
    {
      "question": "8. Vilken ordklass har ordet 'happily' i följande mening: 'They danced happily all night.'?",
      "answers": {
        "a": "Adjective",
        "b": "Verb",
        "c": "Adverb",
        "d": "Noun"
      },
      "correctAnswer": "Adverb"
    },
    {
      "question": "9. Vilken ordklass har ordet 'dog' i följande mening: 'The dog barked loudly.'?",
      "answers": {
        "a": "Verb",
        "b": "Noun",
        "c": "Adjective",
        "d": "Adverb"
      },
      "correctAnswer": "Noun"
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
      <h1>Prov Svårt</h1>
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
    <RouterLink to="/student">
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
