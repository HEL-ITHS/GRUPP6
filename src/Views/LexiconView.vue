<script>
import { registerRuntimeCompiler } from "vue";
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
            phonetic: data.phonetics[0].text,
            audio: data.phonetics[1].audio,
            partOfSpeech: data.meanings[0].partOfSpeech,
            meaning: data.meanings[0].definitions[0].definition,
          };
        });
      if (this.definition === "") return;
    },
  },
};
</script>

<template>
  <HeaderStudent />
  <article>
    Välkommen till vår ordsökningssida! Här kan du enkelt söka på ett ord och få
    fram den engelska betydelsen samt annan relevant information som kan hjälpa
    dig att förstå och använda ordet på rätt sätt. Oavsett om du är en elev som
    behöver hjälp med att översätta ord för en uppgift, eller om du vill bygga
    ut ditt ordförråd på engelska, så finns här en användbar resurs för dig. För
    att komma igång, skriv bara in det ord du söker efter i sökfältet. När du
    söker får du inte bara den engelska betydelsen av ordet, utan även exempel
    på hur ordet används i meningar, uttal, och synonymer. Detta gör att du kan
    lära dig ordet på djupet och förstå dess användning i olika sammanhang.
    Denna sida är perfekt för alla elever som vill förbättra sina
    språkkunskaper, oavsett om du studerar engelska som andraspråk eller om du
    bara vill stärka dina ordkunskaper. Tveka inte att använda sidan så ofta du
    vill – vi är här för att hjälpa dig att lyckas!
  </article>
  <div id="lexicon_container">
    <input v-model="word" placeholder="Skriv in ett ord" id="searched_input" />
    <button id="searched_button" @click="onClickLexicon">Sök</button>
    <div v-if="definition" id="defintion_container">
      <p><strong>Ord:</strong> {{ definition.word }}</p>
      <p><strong>Uttal:</strong> {{ definition.phonetic }}</p>
      <p>
        <strong>Uttal(ljud):</strong>
        <audio controls>
          <source :src="definition.audio" type="audio/mpeg" />
        </audio>
      </p>
      <p><strong>Ordklass:</strong> {{ definition.partOfSpeech }}</p>
      <p><strong>Betydelse:</strong> {{ definition.meaning }}</p>
    </div>
  </div>
</template>

<style>
#lexicon_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
#defintion_container {
  background-color: lightgray;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
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
</style>
