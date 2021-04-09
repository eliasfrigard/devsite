<template>
  <div id="education-container">
    <div id="text" class="ui container">
      <h1 class="ui center aligned icon header">
        <i class="circular university icon"></i>
        <div class="ui hidden divider"></div>
        Bachelor of Computer Science
      </h1>

      <div class="ui hidden divider"></div>

      <p>I am currently studying my second year at the Linnaeus University in Kalmar, Sweden as a distance learning student. The education is focused on DevOps and Web Development as well as Object Oriented Programming and Software Engineering.</p>
      
      <br>

      <a href="curriculum.pdf"><button class="ui secondary basic button">Download Official Curriculum</button></a>

    </div><br><br>

    <div class="ui hidden divider"></div>

    <EducationChart></EducationChart>
  </div>
</template>

<script>
import EducationChart from './EducationChart.vue'

export default {
  name: 'Education',
  data() {
    return {
    }
  },
  components: {
    EducationChart,
  }
}
</script>

<style scoped>
  #education-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }

  #text {
    text-align: center;
    max-width: 800px;
  }
</style>
