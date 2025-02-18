<script>
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

</template>
