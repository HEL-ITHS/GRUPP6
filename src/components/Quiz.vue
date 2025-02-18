<script>
    export default {
        data() {
            return {
                words: ["apple", "rain", "radio"],
                result: ""
            }
        },
        methods: {
            getWords() {
                fetch("/public/words.json")
                .then(response => response.json())
                .then(data => {
                    this.words = data
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
        <li v-for="word in words"> {{ word }}</li>
    </ul>

</template>
