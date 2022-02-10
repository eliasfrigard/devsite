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

    <div class="so-me">
      <i class="fab fa-stack-overflow"></i>
      <i class="fab fa-github"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fa-brands fa-google-plus-g"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {}
  },
}
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: center;
  height: 50px;
  max-width: 600px;
  z-index: 10;
}

#nav-container {
  padding: 20px;
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.966);
}

.menu {
  margin: 0;
  padding: 0;
}

.so-me {
  position: absolute;
  height: 100%;
  top: 0;
  right: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.so-me i {
  font-size: 30px;
  margin: 0 10px;
}

a {
  font-size: 18px;
}
</style>
