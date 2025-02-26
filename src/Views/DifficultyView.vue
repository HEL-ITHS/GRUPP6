<script>
    import HeaderStudent from "../components/HeaderStudent.vue"

    export default {
        components: {
            HeaderStudent
        },
        data() {
            return {
                glosQuiz: "",
                sentenceQuiz: "",
                classQuiz: "",
                showPopup: false,
                popupText: ""
            }
        },
        mounted() {
            window.scrollTo(0, 0)
        },
        methods: {
            startQuiz() {

                },
                showInfo(text) {
                    this.popupText = text
                    this.showPopup = true
                },
                closePopup() {
                    this.showPopup = false
                }
            }
        }

</script>

<template>
    <HeaderStudent />

    <div class="head_text">
        <h1>Quiz portal</h1>
    </div>

    <div class="choise_container">
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
        @click="startQuiz"
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
        @click="startQuiz"
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
            @click="startQuiz"
            >
            Starta quiz
        </button>
    </div>
    </div>

    <div v-if="showPopup" class="popup_info">
        <div class="popup_box">
            <p> {{ popupText }} </p>
            <button class="popup_button" @click="closePopup">Stäng</button>
        </div>
    </div>

</template>

<style scoped>

.head_text {
    display: flex;
    justify-content: center;
    margin-top: 2em;
}

.choise_container {
    margin-top: 5em;
    margin-bottom: 5em;
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
    width: 350px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
</style>
