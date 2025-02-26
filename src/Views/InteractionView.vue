<script>
import HeaderStudent from "../components/HeaderStudent.vue";

export default {
  components: {
    HeaderStudent,
  },
  data() {
    return {
      rating: 0,
      ShowThankYou: false,
    };
  },
  methods: {
    setRating(star) {
      this.rating = star;
      this.ShowThankYou = true;
    },
  },
};
</script>

<template>
  <HeaderStudent />
  <div id="rating_container">
    <div id="hero_text">
      <h1>Dina åsikter är viktiga för oss!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
        officia libero natus nesciunt, modi eveniet aperiam autem exercitationem
        tempore reiciendis atque veritatis, neque aliquid cupiditate facilis
        magni unde impedit delectus?
      </p>
    </div>
    <div id="rating">
      <div id="stars">
        <span v-for="star in 5" :key="star" @click="setRating(star)">
          {{ star <= rating ? "⭐" : "☆" }}
        </span>
        <transition name="rotate-in">
          <div v-if="ShowThankYou">
            <p style="font-size: 32px">Tack för ditt svar!</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
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
