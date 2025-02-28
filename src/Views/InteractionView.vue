<script>
import HeaderStudent from "../components/HeaderStudent.vue";
import ChatComponent from "../components/ChatComponent.vue";
export default {
  components: {
    HeaderStudent,
    ChatComponent
  },
  data() {
    return {
      rating: 0,
      ShowThankYou: false,
      hoverRating : 0
    };
  },
  methods: {
    setRating(star) {
      this.rating = star;
      this.ShowThankYou = true;
    },
    setHover(star){
      this.hoverRating = star
    },
    resetHover(){
this.hoverRating = 0
    }
  },
};
</script>

<template>
  <HeaderStudent />
  <div id="rating_container">
    <div id="hero_text">
      <h1>Vi värdesätter din åsikt!</h1>
      <p>Dina åsikter och synpunkter är oerhört viktiga för oss. Vi strävar alltid efter att förbättra vår tjänst och ge dig den bästa möjliga upplevelsen, och för att kunna göra det behöver vi din hjälp. Genom att dela dina tankar, feedback eller förslag, hjälper du oss att förstå vad vi gör bra och vad vi kan förbättra.

Vi är lyhörda för dina behov och ser varje åsikt som en möjlighet att växa och utvecklas. Tack för att du är en del av vår gemenskap – din åsikt gör verkligen skillnad!</p>
    </div>
    <div id="rating">
      <p>Va tyckte du om vårat quiz?</p>
      <div id="stars">
        <span v-for="star in 5" :key="star" @click="setRating(star)" @mouseover="setHover(star)"
  @mouseleave="resetHover">
          {{ star <= (hoverRating || rating) ? "⭐" : "☆" }}
        </span>
        <transition name="rotate-in">
          <div v-if="ShowThankYou">
            <p style="font-size: 32px">Tack för ditt svar!</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
  <ChatComponent />
</template>

<style>
#rating_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(rgba(6, 8, 24, 0.7), rgba(77, 92, 158, 0.7)),
    url(/assets/rating.png);
  background-position: center;
  background-size: cover;
  min-height: 50vh;
  align-items: center;
  text-align: center;
}
#hero_text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin-top: 50px;
}
#hero_text p {
  max-width: 600px;
  margin-top: 20px;
  font-size: 18px;
  font-style: italic;
}
#rating {
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 30px;
}

#stars span {
  font-size: 42px;
  color: gold;
}
.rotate-in-enter-active {
  animation: rotate-in 1s ease-out;
}

@keyframes rotate-in {
  0% {
    transform: rotate(-360deg) scale(0.1);
    opacity: 0;
  }
  50% {
    transform: rotate(360deg) scale(0.5);
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg)scale(1);
    opacity: 1;
  }
}
</style>
