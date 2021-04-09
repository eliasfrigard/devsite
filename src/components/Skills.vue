<template>
  <div id="skills">
    <div class="skill-card">
      <img class="skill-icon" src="../assets/web-development.png"/>
      <h1>Front-End</h1>
      <br>
      <p>HTML / CSS</p>
      <p>Javascript</p>
      <p>Semantic UI</p>
      <p>React.js</p>
      <p>Vue.js</p>
      <p>Static Site Generators</p>
      <p>...</p>
    </div>
    <div class="skill-card">
      <img class="skill-icon" src="../assets/gear.png"/>
      <h1>Back-End</h1>
      <br>
      <p>Java</p>
      <p>Node.js</p>
      <p>Express</p>
      <p>SQL / NoSQL</p>
      <p>MongoDB / MySQL</p>
      <p>Server Side Rendering</p>
      <p>...</p>
    </div>
    <div class="skill-card">
      <img class="skill-icon" src="../assets/servers.png"/>
      <h1>System Administration</h1>
      <br>
      <p>Linux</p>
      <p>Docker</p>
      <p>Kubernetes</p>
      <p>AWS / Digital Ocean</p>
      <p>CI / CD</p>
      <p>...</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Skills'
  }
</script>

<style scoped>
  #skills {
    background: linear-gradient(180deg, #00374d 40%, rgba(255,255,255,1) 40%);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

  }

  .skill-card {
    margin:20px;
    height: 500px;
    width: 300px;
    background-color: white;
    border-radius:7px;
    border: solid 1px #02537327;
    padding:20px;
    padding-top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    -webkit-box-shadow: 1px 5px 7px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 1px 5px 7px 0px rgba(0,0,0,0.3);
    box-shadow: 1px 5px 7px 0px rgba(0,0,0,0.3);
  }

  .skill-icon {
    width: 50px;
  }

  p {
    line-height: 1.5;
  }
  </style>
