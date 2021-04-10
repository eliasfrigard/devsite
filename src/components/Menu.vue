<template>
  <div id="nav-container" class="ui container">
    <div class="ui secondary menu">
      <a class="item" href="#">
        Home
      </a>
      <a class="item" href="#about-container">
        About
      </a>
      <a class="item" href="#projects-container">
        Projects
      </a>
      <a class="item" href="#education-container">
        Education
      </a>
      <a class="item" href="#contact-container">
        Contact
      </a>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Menu',
    data() {
      return {

      }
    },
  }
</script>

<style scoped>  
  #navbar {
    display: flex;
    justify-content: center;
    height: 50px;
    max-width: 600px;
    
  }

  #nav-container {
    padding: 20px;
    position:absolute;
    width:100vw;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.966);
  }

  a {
    font-size: 18px;
  }
</style>