/* HTML Template */
<template>
  <div class="ui container" id="tools">
    <p>These are some of the tools that I use regularly. I enjoy learning new technologies and using the best tools available.</p>

    <div id="tools-container" @click.prevent="handleToolClick">
      <div data-tooltip="Github Version Control & Project Management">
        <img class="tool-icon" id="github" src="../assets/images/tools/github.png" alt="" srcset="" >
      </div>
      
      <div data-tooltip="Gitlab Version Control & Project Management">
        <img class="tool-icon" id="gitlab" src="../assets/images/tools/gitlab.png" alt="" srcset="">
      </div>

      <div data-tooltip="Digital Ocean Cloud Services">
        <img class="tool-icon" id="digitalocean" src="../assets/images/tools/digitalocean.svg" alt="" srcset="">
      </div>
      
      <div data-tooltip="Amazon Web Services">
        <img class="tool-icon" id="aws" src="../assets/images/tools/aws.png" alt="" srcset="">
      </div>
      
      <div data-tooltip="Figma - Collaborative Interface Design">
        <img class="tool-icon" id="figma" src="../assets/images/tools/figma.svg" alt="" srcset="">
      </div>

      <div data-tooltip="Lucidchart - Visual Software Design">
        <img class="tool-icon" id="lucidchart" src="../assets/images/tools/lucidchart.png" alt="" srcset="">
      </div>

      <div data-tooltip="React Javascript Framework">
        <img class="tool-icon" id="react" src="../assets/images/tools/react.svg" alt="" srcset="">
      </div>

      <div data-tooltip="Vue Javascript Framework">
        <img class="tool-icon" id="vue" src="../assets/images/tools/vue.png" alt="" srcset="">
      </div>

      <!-- break -->
      <div class="break"></div> 

      <div data-tooltip="MongoDB NoSQL Database" data-position="bottom center">
        <img class="tool-icon" id="mongo" src="../assets/images/tools/mongo.png" alt="" srcset="">
      </div>

      <div data-tooltip="MySQL Relational Database" data-position="bottom center">
        <img class="tool-icon" id="mysql" src="../assets/images/tools/mysql.png" alt="" srcset="">
      </div>

      <div data-tooltip="NodeJS Javascript Backend Runtime Environment" data-position="bottom center">
        <img class="tool-icon" id="nodejs" src="../assets/images/tools/nodejs.png" alt="" srcset="">
      </div>

      <div data-tooltip="SASS - CSS Preprocessor" data-position="bottom center">
        <img class="tool-icon" id="sass" src="../assets/images/tools/sass.png" alt="" srcset="">
      </div>

      <div data-tooltip="Semantic UI Front-End Framework" data-position="bottom center">
        <img class="tool-icon" id="semantic" src="../assets/images/tools/semantic.png" alt="" srcset="">
      </div>

      <div data-tooltip="Visual Studio Code Editor" data-position="bottom center">
        <img class="tool-icon" id="vscode" src="../assets/images/tools/vscode.png" alt="" srcset="">
      </div>

      <div data-tooltip="IntelliJ - Integrated Development Environment for Java" data-position="bottom center">
        <img class="tool-icon" id="intellij" src="../assets/images/tools/intellij.png" alt="" srcset="">
      </div>

    </div>
  </div>
</template>

/* Script */
<script>
  export default {
    name: 'Tools',
    data() {
      return {
        
      }
    },
    methods: {
      handleToolClick() {
        const target = event.target

        if (target.classList.contains('tool-icon')) {
          let redirectTo = ''
          
          switch (target.id) {
            case 'github':
              redirectTo = 'https://github.com/'
              break;
            case 'gitlab':
              redirectTo = 'https://about.gitlab.com/'
              break;
            case 'digitalocean':
              redirectTo = 'https://www.digitalocean.com/'
              break;
            case 'aws':
              redirectTo = 'https://aws.amazon.com/'
              break;
            case 'figma':
              redirectTo = 'https://www.figma.com/'
              break;
            case 'lucidchart':
              redirectTo = 'https://www.lucidchart.com/'
              break;
            case 'vue':
              redirectTo = 'https://vuejs.org/'
              break;
            case 'mongo':
              redirectTo = 'https://www.mongodb.com/'
              break;
            case 'mysql':
              redirectTo = 'https://www.mysql.com/'
              break;
            case 'nodejs':
              redirectTo = 'https://nodejs.org/'
              break;
            case 'sass':
              redirectTo = 'https://sass-lang.com/'
              break;
            case 'semantic':
              redirectTo = 'https://semantic-ui.com/'
              break;
            case 'vscode':
              redirectTo = 'https://code.visualstudio.com/'
              break;
            case 'intellij':
              redirectTo = 'https://www.jetbrains.com/idea/'
              break;
            case 'react':
              redirectTo = 'https://reactjs.org/'
              break;    

          }

          window.open(redirectTo, '_blank')
        }
      }
    }
  }
</script>

/* Style */
<style scoped>
  #tools {
    margin-top: 50px;
  }

  #tools-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 50px 50px 50px;
  }

  .tool-icon {
    max-height: 80px;
    max-width: 80px;
    margin: 20px;
    cursor: pointer;
  }
</style>
