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
            }
        ]
    }
    },
    methods:{
        show() {
            this.showAnswer = true
            console.log("show")

        }
    }
}



</script>

<template>
<div>
    <h3> {{ quiz[0].question }}</h3>
    <form>
       <input type="radio">{{ quiz[0].answers.a }}
       <input type="radio">{{ quiz[0].answers.b }}
       <input type="radio"> {{ quiz[0].answers.c }}
       <input type="submit" value="Svara" @click="show()">
    </form>
    <p v-if="showAnswer">{{ quiz[0].correctAnswer }}</p>
    

</div>
 
</template>

