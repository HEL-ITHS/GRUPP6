<script>
  import { userDetails } from '../stores/userStorage'

  export default {
    computed: {
      displayUserName() {
        return userDetails().username
      },

      backgroundStyle() {
        return {
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${this.backgroundImage}`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          padding: '3em',
          height: '50%'
        }
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
      <h1>{{ welcomeHeading }}</h1>
      <h2>{{ displayUserName }}</h2>
      <p>{{ pageDescription }}</p>
    </section>
  </div>
</template>

<style>
  .hero_text_content {
    color: white;
    text-align: center;
    margin: 2em;
  }

  @media (max-width: 600px) {
    .hero_content {
      padding: 2em;
      height: 30%;
    }

    .hero_text_content {
      margin: 1em;
    }

    .hero_text_content h1 {
      font-size: 1.8em;
    }

    .hero_text_content h2 {
      font-size: 1.3em;
    }

    .hero_text_content p {
      font-size: 0.9em;
    }
  }

  @media (max-width: 500px) {
    .hero_content {
      padding: 1em;
      height: 10%;
    }
    .hero_text_content {
      margin: 1em;
    }

    .hero_text_content h1 {
      font-size: 1.5em;
    }

    .hero_text_content h2 {
      font-size: 1em;
    }

    .hero_text_content p {
      font-size: 0.8em;
    }
  }
</style>
