<template>
  <div id="about-container">
    <img src="../assets/profile2.jpg" alt="profileimg" id="profileimg"><br>
    <div id="text" class="ui container">
      <h1>{{name}}</h1><br>
      <p>{{description}}</p>
      <br>
      <a href="curriculum.pdf"><button class="ui basic large yellow button">Download Curriculum Vitae</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      name: "Hello! My name is Elias.",
      description: "I am a Software Developer from Sweden living in Helsinki, Finland. I have a degree in Computer Science, specialized in DevOps and Web Development. Below you can find some of my work, skills and what I can do for you and your project!",
    }
  }
}
</script>

<style scoped>
  #about-container {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #00374d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    padding: 70px 0 70px 0;
  }

  #text {
    text-align: center;
    max-width: 720px;
  }

  #profileimg {
    width: 190px;
    margin: 20px;
    border-radius: 100%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3); 
    -moz-box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }
</style>
