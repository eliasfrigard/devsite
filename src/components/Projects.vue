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
        <Project class="project-item" title="Web Desktop" description="Desktop emulation in the browser with movable windows, apps and real-time communication." src="desktop-logo.jpg" />
        <Project class="project-item" title="Timewaves" description="JavaFX & Maven Application for creating and vizualising timelines." src="timewaves-background.png" />
        <Project class="project-item" title="Gitlab Webhooks" description="Utilizing Webhooks and Web Sockets to interact with GitLab Repositories in real time." src="gitlab-logo.webp" />
    </div>
    <div class="project-container">
        <Project class="project-item" title="This title" />
        <Project class="project-item" title="This title" />
    </div>


    <div class="ui hidden divider"></div>

    <button class="huge ui large basic blue button" @mouseover="hover = true" @mouseleave="hover = false" v-if="!hover">
      See More On Github!
    </button>

    <button class="huge ui large blue button" @click="sendToGithub"  @mouseover="hover = true" @mouseleave="hover = false" v-if="hover">
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
  methods: {
    sendToGithub() {
      window.location.href = "https://github.com/eliasfrigard"
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
