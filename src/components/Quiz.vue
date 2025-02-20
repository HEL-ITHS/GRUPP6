
<script>
export default{
    data(){
        return {
<<<<<<< HEAD
      selectedAnswer: Array(9).fill(null),
      showResults: false,
=======
      selectedAnswer: [], 
      showResults: false, 
>>>>>>> ee870e4fa0332cfdcdaaeb8a2349fe30ab3f2a53
      quiz: [
      {
        "question": "1. Hur säger man 'katt' på engelska?",
        "answers": {
            "a": "Dog",
            "b": "Cat",
            "c": "Horse",
            "d": "Mouse"
        },
        "correctAnswer": "Cat"
    },
    {
        "question": "2. Vilket av följande ord betyder 'hund' på engelska?",
        "answers": {
            "a": "Fish",
            "b": "Bird",
            "c": "Dog",
            "d": "Lion"
        },
        "correctAnswer": "Dog"
    },
    {
        "question": "3. Vad är den rätta översättningen av 'hus' till engelska?",
        "answers": {
            "a": "House",
            "b": "Car",
            "c": "Tree",
            "d": "Apartment"
        },
        "correctAnswer": "House"
    },
    {
        "question": "4. Vilket ord betyder 'sol' på engelska?",
        "answers": {
            "a": "Moon",
            "b": "Star",
            "c": "Sun",
            "d": "Light"
        },
        "correctAnswer": "Sun"
    },
    {
        "question": "5. Vad heter 'vatten' på engelska?",
        "answers": {
            "a": "Water",
            "b": "Juice",
            "c": "Milk",
            "d": "Soda"
        },
        "correctAnswer": "Water"
    },
    {
        "question": "6. Vad är det engelska ordet för 'bil'?",
        "answers": {
            "a": "Train",
            "b": "Car",
            "c": "Bike",
            "d": "Bus"
        },
        "correctAnswer": "Car"
    },
    {
        "question": "7. Vilket alternativ betyder 'röd' på engelska?",
        "answers": {
            "a": "Blue",
            "b": "Green",
            "c": "Red",
            "d": "Yellow"
        },
        "correctAnswer": "Red"
    },
    {
        "question": "8. Hur säger man 'äpple' på engelska?",
        "answers": {
            "a": "Banana",
            "b": "Apple",
            "c": "Pear",
            "d": "Orange"
        },
        "correctAnswer": "Apple"
    },
    {
        "question": "9. Vilket ord betyder 'skola' på engelska?",
        "answers": {
            "a": "School",
            "b": "Hospital",
            "c": "Library",
            "d": "University"
        },
        "correctAnswer": "School"
        }
      ]
    };
  },
<<<<<<< HEAD

    methods: {
        submitQuiz() {
        if(this.allAnswered) {
        this.showResults = true;
        }
        }
    },
=======
  computed: {
        allAnswered(){
            return this.selectedAnswer.length === this.quiz.length && this.selectedAnswer.every(ans => ans)
        }
    },
  methods: {
    submitQuiz() {
        if(this.allAnswered){
            this.showResults = true;
        }
        else{alert("hej")}
     }
 }
>>>>>>> ee870e4fa0332cfdcdaaeb8a2349fe30ab3f2a53

    computed: {
        allAnswered() {
            return this.selectedAnswer.length === this.quiz.length && this.selectedAnswer.every(question => question !== null)
        }
    }


    }

</script>

<template>
    <div>
    <h2>Prov Enkelt</h2>
    <div v-for="(question, index) in quiz" :key="index">
      <form @submit.prevent>
        <h3>{{ question.question }}</h3>
        <label v-for="(answer, key) in question.answers" :key="key">
          <input
          type="radio"
           v-model="selectedAnswer[index]"
           :value="answer">
          {{ answer }}
        </label>
      </form>
    </div>
<<<<<<< HEAD
    <button :disabled = "!allAnswered" @click="submitQuiz">Visa mina svar</button>
=======
    <button @click="submitQuiz" :disabled="!allAnswered">Visa mina svar</button>
>>>>>>> ee870e4fa0332cfdcdaaeb8a2349fe30ab3f2a53

    <div v-if="showResults">
      <h2>Resultat</h2>
      <ul>
        <li v-for="(question, index) in quiz" :key="'result' + index">
          <strong>{{ question.question }}</strong><br>
          Rätt svar: <strong>{{ question.correctAnswer }}</strong><br>
          Ditt svar:
          <strong :style="{ color: selectedAnswer[index] === question.correctAnswer ? 'green' : 'red' }">
            {{ selectedAnswer[index] }}
          </strong>
        </li>
      </ul>
    </div>

    </div>

  </template>

  <style>
  form {
    background-color: #77b0ff;
    border: 1px solid black;
  }


</style>
