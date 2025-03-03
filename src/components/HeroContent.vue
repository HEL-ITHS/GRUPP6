<script>
  import { userDetails} from "../stores/userStorage";

  export default {
    computed: {
      setUsernameFromLogIn(){
        const userstore = userDetails()
        return userstore.username
      },

      displayUserView(){
        const userstore = userDetails()
        return userstore.userType;
      },

      backgroundStyle() {
        return {
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${this.backgroundImage}`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          padding: '3em',
          height: '50%'
        };
      }
    },

    props: {
      ariaLabel: {
        type: String,
        required: true
      },
      welcomeHeading: {
        type: String,
        required: true
      },
      pageDescription: {
        type: String,
        required: true
      },
      backgroundImage: {
        type: String,
        required: true
      }
    }
  }
</script>


<template>
  <div class="hero_content" :style="backgroundStyle" :aria-label="ariaLabel">
    <section class="hero_text_content">
      <h1> {{ welcomeHeading }}</h1>
      <h2> {{ setUsernameFromLogIn }} </h2>
      <h3> Du är inloggad som: {{ displayUserView }}</h3>
      <p> {{  pageDescription }}</p>
    </section>
  </div>
</template>

<style>
  .hero_text_content {
    color: white;
    text-align: center;
    margin: 2em;
  }
</style>
