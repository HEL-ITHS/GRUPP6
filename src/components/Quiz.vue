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
            currentIndex: 0,
            currentQuestionIndex: 1,
            answerBtn: [],
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
        onClickNext(){
            if(this.currentQuestionIndex < this.quiz.length -1){
            this.currentQuestionIndex ++
            }
        },

        show(currentIndex) {
            this.showAnswer[currentIndex] = true;
            this.disabled[currentIndex] = true;
            this.answerBtn[currentIndex] = true;
            }

        },


 }

</script>

<template>
    <div>
      <div v-for="(question, currentIndex) in quiz" :key="currentIndex" v-if="currentIndex === currentQuestionIndex">
            <h2>Fråga:</h2>
            <form @submit.prevent="show(currentIndex)">
                <h3>{{ question.question }}</h3>
                <label>
                <input type="radio" v-model="selectedAnswer[currentIndex]" :value="question.answers.a" :disabled="disabled[currentIndex]">
                {{ question.answers.a }}
                </label><br>
                <label>
                <input type="radio" v-model="selectedAnswer[currentIndex]" :value="question.answers.b" :disabled="disabled[currentIndex]">
                {{ question.answers.b }}
                </label><br>
                <label>
                <input type="radio" v-model="selectedAnswer[currentIndex]" :value="question.answers.c" :disabled="disabled[currentIndex]">
                {{ question.answers.c }}
                </label><br>

                <input type="submit" :disabled="answerBtn[currentIndex]" value="Svara">
                    <div id="answers" v-if="showAnswer[currentIndex]">
                        <p>Rätt svar: {{ quiz[currentIndex].correctAnswer }}</p>
                        <p>Ditt svar: {{ selectedAnswer[currentIndex] }}</p>
                    </div>
                <button v-if="currentIndex < quiz.length -1" @click="onClickNext()">Nästa</button>
            </form>
            <h2 v-if="currentIndex >= quiz.length">Slut på fråga</h2>
        </div>
        </div>
  </template>

<style>
  form {
    background-color: #77b0ff;
    border: 1px solid black;
  }

</style>
