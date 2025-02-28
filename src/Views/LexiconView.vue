<script>
import HeaderStudent from "../components/HeaderStudent.vue";

export default {
  components: { HeaderStudent },

  data() {
    return {
      word: "",
      definition: "",
    };
  },
  methods: {
    onClickLexicon() {
      if (!this.word) return;

      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
        .then((response) => response.json())
        .then((result) => {
          const data = result[0];

          this.definition = {
            word: data.word,
            phonetic: data.phonetics[0]?.text || "",
            audio: data.phonetics[1]?.audio || "",
            meanings: data.meanings.map((meaning) => ({
              partOfSpeech: meaning.partOfSpeech,
              definition: meaning.definitions[0]?.definition || "",
              synonyms: meaning.synonyms[0] || "",
            })),
          };
        });
    },
    playAudio() {
      if (this.definition && this.definition.audio) {
        const audio = new Audio(this.definition.audio);
        audio.play();
      }
    },
  },
};
</script>

<template>
  <HeaderStudent />

  <div class="hero_content">
    <section class="hero_text_content">
      <h1>Välkommen till lexikon</h1>
      <p>
        Vårt lexikon är en användbar resurs för att snabbt hitta förklaringar på
        begrepp och termer som används i olika ämnen. Det är utformat för att
        vara lättillgängligt och hjälpa elever att förstå viktiga ord och
        definitioner. Genom att hålla lexikonet uppdaterat strävar vi efter att
        stödja lärandet på bästa sätt.
      </p>
    </section>
  </div>

  <div id="lexicon_container">
    <input
      v-model="word"
      placeholder="Skriv in ett ord"
      id="searched_input"
      @keydown.enter="onClickLexicon"
    />
    <button id="searched_button" @click="onClickLexicon">Sök</button>
    <div v-if="definition" id="defintion_container">
      <div id="search_word_container">
        <h3 id="searched_word">
          <strong>{{ definition.word.toUpperCase() }}</strong>
        </h3>
        <p
          v-if="definition.phonetic !== '' || definition.audio !== ''"
          id="phonetic_word"
        >
          <strong>Uttal:</strong> {{ definition.phonetic }}
          <button v-if="definition.audio" @click="playAudio" id="play_button">
            ▶
          </button>
        </p>
      </div>
      <div
        v-for="(meaning, index) in definition.meanings"
        :key="index"
        id="words_defintion"
      >
        <div v-if="meaning.partOfSpeech" id="part_of_speech">
          <h4>{{ meaning.partOfSpeech }}</h4>
        </div>
        <p v-if="meaning.definition" id="defintion">
          <strong>Defintion:</strong> {{ meaning.definition }}
        </p>
        <p v-if="meaning.synonyms.length > 0" class="synonyms">
          <strong>Synonymer:</strong> {{ meaning.synonyms }}
        </p>
        <p v-else class="synonyms">Inga synonymer finns</p>
      </div>
    </div>
  </div>
</template>

<style>
.hero_content {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url("/assets/Books.jpg");
  height: 50%;
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 3em;
}

.hero_text_content {
  color: white;
  text-align: center;
  margin: 2em;
}

#lexicon_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
#defintion_container {
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px;
}

#searched_button {
  width: 10%;
  padding: 6px;
  background: #2575fc;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}

#searched_button:hover {
  background: #1e63d7;
  transform: scale(1.05);
}
#searched_input {
  width: 25%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  background: #f8f8f8;
}

#searched_input:focus {
  border-color: #2575fc;
  box-shadow: 0 0 8px rgba(37, 117, 252, 0.3);
  outline: none;
}

#search_word_container {
  width: 100%;
  font-size: 20px;
}
#searched_word {
  display: flex;
  justify-content: center;
}
#phonetic_word {
  display: flex;
  justify-content: center;
  align-items: center;
}
#play_button {
  border: none;
  background: none;
  color: black;
}

#words_defintion {
  box-shadow: 2px 2px 2px 2px;
  margin: 10px;
  width: 100%;
  border-radius: 8px;
  background-color: lightblue;
}
#part_of_speech {
  display: flex;
  justify-content: center;
  align-items: center;
}
#defintion {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
}
.synonyms {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
}
</style>
