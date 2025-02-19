<!-- <script>
    export default {
        data() {
            return {
                words: [],
            }
        },
        methods: {
            getWords() {
                fetch("/public/words.json")
                .then(response => response.json())
                .then(data => {
                    this.words = data.words
                    console.log(data)
                })
            }
        },
        created() {
            this.getWords()
        }
    }
</script>

<template>
    <ul>
        <li v-for="word in words" > {{ word.english }} - {{ word.swedish }}</li>
    </ul>

</template> -->
<script>
export default{
    data(){
        return{
            disabled: [],
            selectedAnswer: [],
            showAnswer: [],
            quiz: [
            {
                "question": "Vad är hej på engelska?",
                "answers": {
                "a": "Hello",
                "b": "Goodbye",
                "c": "Thanks"
                },
                "correctAnswer": "Hello"
            },
            {
                "question": "Vad är hus på engelska?",
                "answers": {
                "a": "Tree",
                "b": "House",
                "c": "Chair"
                },
                "correctAnswer": "House"
            },
            {
                "question": "Vad heter hund på engelska?",
                "answers": {
                "a": "Bird",
                "b": "Cat",
                "c": "Dog"
                },
                "correctAnswer": "Dog"
            },
            {
                "question": "Vad heter katt på engelska?",
                "answers": {
                "a": "Dinosaur",
                "b": "Cat",
                "c": "Car"
                },
                "correctAnswer": "Cat"
            }
        ]
    }
    },
    methods:{
        show(index) {

            if (this.selectedAnswer[index]){
                this.disabled[index] = true;
            }
                this.showAnswer[index] = true;
                console.log("showanswer är true")
                console.log(this.selectedAnswer)
            }

        }
    }

</script>

<template>
    <div>
      <div v-for="(question, index) in quiz" :key="index">
        <h2>fråga:</h2>

        <form @submit.prevent="show(index)">
            <h3>{{ question.question }}</h3>
          <label>
            <input type="radio" v-model="selectedAnswer[index]" :value="question.answers.a" :disabled="disabled[index]">
            {{ question.answers.a }}
          </label>
          <br>
          <label>
            <input type="radio" v-model="selectedAnswer[index]" :value="question.answers.b" :disabled="disabled[index]">
            {{ question.answers.b }}
          </label>
          <br>
          <label>
            <input type="radio" v-model="selectedAnswer[index]" :value="question.answers.c" :disabled="disabled[index]">
            {{ question.answers.c }}
          </label>
          <br>
          <input type="submit" value="Svara">
          <div id="answers" v-if="showAnswer[index]">
            <p>Rätt svar: {{ quiz[index].correctAnswer }}</p>
          <p>Ditt svar: {{ selectedAnswer[index] }}</p>
        </div>
        </form>

      </div>
    </div>
  </template>

  <style>
  form {
    background-color: #77b0ff;
    border: 1px solid black;
  }
 

</style>
