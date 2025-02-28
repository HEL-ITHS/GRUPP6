<script>
    import HeaderStudent from "../components/HeaderStudent.vue"
    import NewQuiz from "../components/NewQuiz.vue";

    export default {
        components: {
            HeaderStudent,
            NewQuiz
        },
        data() {
            return {
                glosQuiz: "",
                sentenceQuiz: "",
                classQuiz: "",
                showPopup: false,
                popupText: "",
                fetchKey: "",
                quizLevel: false,
                linkName: "",
                allChoices: true,
                showParrot: true
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        },

        methods: {
            onClickStartQuiz(linkName){
                this.linkName = linkName
                this.quizLevel = true;
                this.allChoices = !this.allChoices
                this.showParrot = false
            },
                showInfo(text) {
                    this.popupText = text
                    this.showPopup = true
                },
                closePopup() {
                    this.showPopup = false
                },
            quitQuiz(){
                this.quizLevel = false;
                this.allChoices = true;
                this.showParrot = true
            }
            }
        }
</script>

<template>
    <HeaderStudent />

    <div class="head_container">
        <div class="head_text">
            <img class="quiz_image" src="/assets/quiz2.jpg" alt="Quiz time letters">
        </div>
        <div v-if="showParrot" class="parrot_container">
            <img class="parrot" src="/assets/parrot.png" alt="parrot with speachbubble">
        </div>
    </div>

    <div v-if="allChoices" class="choise_container">
    <div class="choice_parts">
        <div class="quiz_type_container">
            <div class="quiz_type"><strong>Glosor</strong></div>
            <img class="info_image" src="/assets/info.png" alt="" @click="showInfo('I detta quiz lär vi oss ord.')">
        </div>
        <div class="level_container">
            <p>Svårighetsgrad </p>
            <img class="level_image" src="/assets/level1.png" alt="Grafic of level">
        </div>
        <button
        class="start_quiz"
        @click="onClickStartQuiz('/quizLevelEasy.json')"
        >
        Starta quiz
        </button>
    </div>

    <hr style="margin-bottom: 2em; margin-top: 2em; margin-left: 5em; margin-right: 5em;">

    <div class="choice_parts">
        <div class="quiz_type_container">
            <div class="quiz_type"><strong>Ord i mening</strong></div>
            <img class="info_image" src="/assets/info.png" alt="" @click="showInfo('I detta quiz lär vi oss att placera rätt ord i en mening.')">
        </div>
        <div class="level_container">
            <p>Svårighetsgrad </p>
            <img class="level_image" src="/assets/level2.png" alt="Grafic of level">
        </div>
        <button
        class="start_quiz"
        @click="onClickStartQuiz('/public/quizLevelMedium.json')"
        >
        Starta quiz
    </button>
    </div>

    <hr style="margin-bottom: 2em; margin-top: 2em; margin-left: 5em; margin-right: 5em;">

    <div class="choice_parts">
        <div class="quiz_type_container">
            <div class="quiz_type"><strong>Ordklasser</strong></div>
            <img class="info_image" src="/assets/info.png" alt="" @click="showInfo('I detta quiz lär vi oss om ordklasser.')">
        </div>
        <div class="level_container">
            <p>Svårighetsgrad </p>
            <img class="level_image" src="/assets/level3.png" alt="Grafik of level">
        </div>
        <button
            class="start_quiz"
            @click="onClickStartQuiz('/public/quizLevelHard.json')"
            >
            Starta quiz
        </button>
    </div>
    </div>

    <div v-if="showPopup" class="popup_info">
        <div class="popup_box">
            <p> {{ popupText }} </p>
            <img class="popup_image" src="/assets/questionmark.jpg" alt="questio mark">
            <div class="button_container">
                <button class="popup_button" @click="closePopup">Stäng</button>
            </div>
        </div>
    </div>

    <div v-if="quizLevel">
        <NewQuiz :quizLink="linkName" />
        <div class="container_cancel_button">
            <button @click="quitQuiz" class="cancel_button">Avsluta</button>
        </div>
    </div>
</template>

<style scoped>

.head_container {
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
    margin-bottom: 3em;
}

.quiz_image {
    height: 250px;
}

.parrot {
    height: 300px;
}

.choise_container {
    margin-top: 2em;
    margin-bottom: 7em;
}

.choice_parts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
}

.quiz_type {
    margin-left: 2em;
}

.quiz_type_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.info_image {
    height: 20px;
    cursor: pointer;
}

.level_container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.level_container p {
    text-align: center;
    align-items: center;
    display: flex;
    margin: 0;
}

.level_image {
    height: 16px;
}

.start_quiz {
    width: 150px;
    background-color: #7ac0f5;
    border: none;
    border-radius: 5px;
    padding: 12px;
    transition: transform 0.3s ease;
}

.start_quiz:hover {
    background-color: #519fdb;
    transform: scale(1.1);
}

.popup_info {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup_box {
    justify-content: center;
    width: 350px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.button_container {
    display: flex;
    justify-content: center;
}

.popup_button {
    width: 150px;
    background-color: #7ac0f5;
    border: none;
    border-radius: 5px;
    padding: 12px;
    margin-top: 2em;
    transition: transform 0.3s ease;
}

.popup_button:hover {
    background-color: #519fdb;
    transform: scale(1.1);
}

.popup_image {
    width: 100px;
    margin-top: 1em;
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
</style>
