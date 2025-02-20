
<script>
export default{
    data(){
        return{
            disabled: false,
            selectedAnswer: [],
            allAnswers:[],
            quiz: [
    {
        "question": "1. Hur säger man 'katt' på engelska?",
        "answers": {
            "a": "Dog",
            "b": "Cat",
            "c": "Horse",
            "d": "Mouse"
        },
        "correctAnswer": "Cat"
    },
    {
        "question": "2. Vilket av följande ord betyder 'hund' på engelska?",
        "answers": {
            "a": "Fish",
            "b": "Bird",
            "c": "Dog",
            "d": "Lion"
        },
        "correctAnswer": "Dog"
    },
    {
        "question": "3. Vad är den rätta översättningen av 'hus' till engelska?",
        "answers": {
            "a": "House",
            "b": "Car",
            "c": "Tree",
            "d": "Apartment"
        },
        "correctAnswer": "House"
    },
    {
        "question": "4. Vilket ord betyder 'sol' på engelska?",
        "answers": {
            "a": "Moon",
            "b": "Star",
            "c": "Sun",
            "d": "Light"
        },
        "correctAnswer": "Sun"
    },
    {
        "question": "5. Vad heter 'vatten' på engelska?",
        "answers": {
            "a": "Water",
            "b": "Juice",
            "c": "Milk",
            "d": "Soda"
        },
        "correctAnswer": "Water"
    },
    {
        "question": "6. Vad är det engelska ordet för 'bil'?",
        "answers": {
            "a": "Train",
            "b": "Car",
            "c": "Bike",
            "d": "Bus"
        },
        "correctAnswer": "Car"
    },
    {
        "question": "7. Vilket alternativ betyder 'röd' på engelska?",
        "answers": {
            "a": "Blue",
            "b": "Green",
            "c": "Red",
            "d": "Yellow"
        },
        "correctAnswer": "Red"
    },
    {
        "question": "8. Hur säger man 'äpple' på engelska?",
        "answers": {
            "a": "Banana",
            "b": "Apple",
            "c": "Pear",
            "d": "Orange"
        },
        "correctAnswer": "Apple"
    },
    {
        "question": "9. Vilket ord betyder 'skola' på engelska?",
        "answers": {
            "a": "School",
            "b": "Hospital",
            "c": "Library",
            "d": "University"
        },
        "correctAnswer": "School"
    }
]
    }
    },

    }

</script>

<template>
    <div>
        <h2>Prov Enkelt</h2>
      <div v-for="(question, index) in quiz" :key="index">
        

        <form @submit.prevent="show(index)">
            <h3>{{ question.question }}</h3>
          <label>
            <input type="radio" v-model="selectedAnswer[index]" :value="question.answers.a">
            {{ question.answers.a }}
          </label>
          <br>
          <label>
            <input type="radio" v-model="selectedAnswer[index]" :value="question.answers.b">
            {{ question.answers.b }}
          </label>
          <br>
          <label>
            <input type="radio" v-model="selectedAnswer[index]" :value="question.answers.c">
            {{ question.answers.c }}
          </label>
          <br>
          <label>
            <input type="radio" v-model="selectedAnswer[index]" :value="question.answers.d">
            {{ question.answers.d }}
          </label>
          <br>
        
        
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
