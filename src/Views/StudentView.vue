<script>
  import HeaderStudent from "../components/HeaderStudent.vue"

  export default {
    components: {
      HeaderStudent,
    }
  }
</script>

<template>
  <HeaderStudent />
  <div class="hero_content" aria-label= "">
    <section class="hero_text_content">
      <h1>Studentens Dashboard</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia mi nec erat gravida, at varius justo gravida. Integer aliquet ante et ultricies interdum. Morbi dapibus metus at velit viverra, eget vestibulum sem dictum. Nullam accumsan, metus at suscipit fermentum, dui ligula hendrerit erat, at fermentum arcu purus sit amet est.</p>
      <p>In posuere leo ut nisi hendrerit, vel posuere nisi feugiat. Sed in dictum neque. Ut hendrerit leo sit amet mi suscipit, vel volutpat turpis auctor.</p>
    </section>
  </div>
  <div class="student_options">
    <button class="student_navigation_btns">Gör quiz</button class="student_navigation_btns">
    <button class="student_navigation_btns">Mina resultat</button>
    <button class="student_navigation_btns">Lexikon</button>
  </div>
</template>

<style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }

  .hero_content {
    background:
    linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.5)
    ), url('/assets/Books.jpg');
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

  .student_options {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3em;
  }

  .student_navigation_btns {
    font-weight: 600;
    color: white;
    background-color: #0e74c2;;
    border: none;
    border-radius: 5px;
    padding: 20px;
    margin: 2em;
    transition: background-color 0.3s ease;
    width: 200px;
  }

  .student_navigation_btns:hover {
    background-color: #004276;
  }
</style>
