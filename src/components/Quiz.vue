<script>
    export default {
        data() {
            return {
                word: "",
            }
        },
        methods: {
            getWords() {
                fetch("/public/words.json")
                .then(response => response.json())
                .then(data => {
                    this.word = data
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
        <li v-for="words in word"> {{ words }}</li>
    </ul>

</template>
