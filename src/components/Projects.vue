<template>
  <div id="projects-container" class="ui container">
    <h1 class="ui center aligned icon header">
      <i class="circular pencil alternate icon"></i>
      <div class="ui hidden divider"></div>

      Recent Projects
    </h1>
    <br>
    <p>I am passionate about my work and am commited to creating awesome products and creative solutions. More than just a nerdy Software Developer, I am a creative individual with a Master's Degree in Music from the world renowned Sibelius-Academy.</p>

    <p>Here are some of my recent projects. Want to know more? <a href="mailto:elias_frigard@hotmail.com">Send me an e-mail.</a></p>

    <div class="project-container">
        <Project class="project-item" title="This title" src="../assets/project1.jpg" />
        <Project class="project-item" title="This title" />
        <Project class="project-item" title="This title" />
    </div>
    <div class="project-container">
        <Project class="project-item" title="This title" src="../assets/project1.jpg" />
        <Project class="project-item" title="This title" />
        <Project class="project-item" title="This title" />
    </div>


    <div class="ui hidden divider"></div>

    <button class="huge ui basic blue button" @mouseover="hover = true" @mouseleave="hover = false" v-if="!hover">
      See More On Github!
    </button>

    <button class="huge ui blue button" @mouseover="hover = true" @mouseleave="hover = false" v-if="hover">
      See More On Github!
    </button>
  </div>
</template>

<script>
import Project from './Project.vue'

export default {
  name: 'Projects',
  data() {
    return {
      hover: false,
    }
  },
  components: {
    Project,
  }
}
</script>

<style scoped>
  #projects-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 50px 0;
  }

  .project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #project-items {
    display: flex;
  }

  .project-item {
    margin: 20px;
  }
</style>
