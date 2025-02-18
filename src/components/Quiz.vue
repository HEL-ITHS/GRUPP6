<script>
    export default {
        data() {
            return {
                words: "",
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
