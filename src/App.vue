<template>
  <div id="app" v-on:load="onLoaded" v-show="loaded">
      <Menu />
      <Splash />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <div class="ui container">
        <div class="ui horizontal divider">Education</div>
      </div>
      <Education />
      <Contact />
      <Footer />
  </div>
</template>

<script>
import Splash from './components/Splash.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
import Contact from './components/Contact.vue'
import Tools from './components/Tools.vue'

export default {
  name: 'App',
  components: {
    Splash,
    About,
    Skills,
    Education,
    Projects,
    Footer,
    Menu,
    Contact,
    Tools,
  },
  data() {
    return {
      loaded: true,
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

* {
  font-family: 'Karla', sans-serif;  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: 0.7px;
}

p {
    font-size: 16px;
    letter-spacing: 1.5px;
    line-height: 2;
    white-space: break-spaces;
    text-align: center;
}

html {
    scroll-behavior: smooth;
}

.fade-enter-active {
transition: opacity 3s ease-in-out;;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

.break {
  flex-basis: 100%;
  height: 5px;
}
</style>
