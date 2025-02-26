<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      showQuiz: true,
      selectedAnswer: Array(9).fill(null),
      showResults: false,
      quiz: [
        {
          question: "1. Hur säger man 'katt' på engelska?",
          answers: {
            a: "Dog",
            b: "Cat",
            c: "Horse",
            d: "Mouse",
          },
          correctAnswer: "Cat",
        },
        {
          question: "2. Vilket av följande ord betyder 'hund' på engelska?",
          answers: {
            a: "Fish",
            b: "Bird",
            c: "Dog",
            d: "Lion",
          },
          correctAnswer: "Dog",
        },
        {
          question:
            "3. Vad är den rätta översättningen av 'hus' till engelska?",
          answers: {
            a: "House",
            b: "Car",
            c: "Tree",
            d: "Apartment",
          },
          correctAnswer: "House",
        },
        {
          question: "4. Vilket ord betyder 'sol' på engelska?",
          answers: {
            a: "Moon",
            b: "Star",
            c: "Sun",
            d: "Light",
          },
          correctAnswer: "Sun",
        },
        {
          question: "5. Vad heter 'vatten' på engelska?",
          answers: {
            a: "Water",
            b: "Juice",
            c: "Milk",
            d: "Soda",
          },
          correctAnswer: "Water",
        },
        {
          question: "6. Vad är det engelska ordet för 'bil'?",
          answers: {
            a: "Train",
            b: "Car",
            c: "Bike",
            d: "Bus",
          },
          correctAnswer: "Car",
        },
        {
          question: "7. Vilket alternativ betyder 'röd' på engelska?",
          answers: {
            a: "Blue",
            b: "Green",
            c: "Red",
            d: "Yellow",
          },
          correctAnswer: "Red",
        },
        {
          question: "8. Hur säger man 'äpple' på engelska?",
          answers: {
            a: "Banana",
            b: "Apple",
            c: "Pear",
            d: "Orange",
          },
          correctAnswer: "Apple",
        },
        {
          question: "9. Vilket ord betyder 'skola' på engelska?",
          answers: {
            a: "School",
            b: "Hospital",
            c: "Library",
            d: "University",
          },
          correctAnswer: "School",
        },
      ],
    };
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
  <div v-if="showQuiz">
    <div class="test_text">
      <h1>Prov Enkelt</h1>
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
