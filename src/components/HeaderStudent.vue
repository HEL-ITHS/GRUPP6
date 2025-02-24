<!-- <script>

</script>


<template>
  <header class="py-3" style="background-color:#004276 ;">
    <div class="container d-flex justify-content-beetween align-items-center">
      <nav> 
      <a href="#" class="text-decoration-none mx-3" style="color: white;">Text 1</a>
       <a href="#" class="text-decoration-none mx-3" style="color: white;">Text 2 </a>
      </nav>
      <div class="img-logo">
      <img src="/assets/fox.jpeg" alt="Grammify-logo" class="logo">
    </div>
      <nav> 
      <a href="#" class="text-decoration-none mx-3" style="color: white;">Text 3</a>
       <a href="#" class="text-decoration-none mx-3" style="color: white;">Text 4 </a>
      </nav>

    </div>
  </header>
</template>

<style scoped>
.img-logo{
  width: 120px;
  display: flex;
  justify-content: center;
}
.logo{
  max-width: 100%;
  height: auto;
}

</style> -->


<script>

</script>


<template>
  <header class="py-3" style="background-color:#004276 ;">
    <div class="container d-flex justify-content-beetween">
      <div class="img-logo">
      <img src="/assets/fox.jpeg" alt="Grammify-logo" class="logo">
    </div>
    <div class="d-flex justify-content-center flex-grow-1">
    <h2 class="header-text">Välkommen Elev</h2>
  </div>
      <nav class="d-flex align-items-center"> 
      <a href="#" class="link" style="color: white;">Text 3</a>
       <a href="#" class="link" style="color: white;">Text 4 </a>
      </nav>

    </div>
  </header>
</template>

<style scoped>
.img-logo{
  width: 120px;
  display: flex;
  justify-content: center;
}
.logo{
  max-width: 100%;
  height: auto;
}
.header-text{
  background-color:#7AC0F5 ;
  color: white;
  padding: 10px 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.link:hover {
  background-color: #0056b3; 
  transform: scale(1.05); 
}

.link:active {
  background-color: #004085; 
}

</style>



