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
            disabled: false,
            selectedAnswer: "",
            showAnswer: false,
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
            }
        ]
    }
    },
    methods:{
        show() {

            if (this.selectedAnswer){
                this.disabled = true;
            }
                this.showAnswer = true;
                console.log("showanswer är true")
                console.log(this.selectedAnswer)
            }

        }
    }

</script>

<template>
<div>
    <div v-for="(question, index) in quiz" :key="index">
        <h3> {{ question.question }}</h3>
        <form>
            <input v-model="selectedAnswer" value="Hello" type="radio" :disabled="disabled">{{ quiz[index].answers.a }}
            <input v-model="selectedAnswer" value="Goodbye" type="radio" :disabled="disabled">{{ quiz[index].answers.b }}
            <input v-model="selectedAnswer" value= "Thanks" type="radio" :disabled="disabled"> {{ quiz[index].answers.c }}
            <input type="button" value="Svara" @click="show()">
        </form>
    </div>


    <div>
        <p v-if="showAnswer">Rätt svar: {{ quiz[0].correctAnswer }}</p>
        <p v-if="showAnswer">Ditt svar: {{ selectedAnswer }}</p>
    </div>




</div>

</template>
