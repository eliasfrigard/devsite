/* HTML Template */
<template>
  <div id="contact-container">

    <!-- Header -->
    <h1 class="ui center aligned icon header">
      Contact Me!
    </h1>
    <br>

    <!-- Description -->
    <div class="ui container">
      <p>Do you need help with realising your next software project? Please contact me and we will make it work! I'm always looking for new and exiting projects and I'm just as skilled at deploying and maintaining you applications as I am developing them!</p>
    </div><br>

    <div class="ui hidden divider"></div>

    <div id="contact" @submit.prevent="submitForm">
      <form class="ui form">

        <!-- Two Fields -->
        <div class="two fields">
          <!-- Name Field -->
          <div class="field">
            <label>Name</label>
            <input type="text" v-model="name" name="name" placeholder="Name">
          </div>
          <!-- Email Field -->
          <div class="field">
            <label>E-Mail</label>
            <input type="text" v-model="email" name="email" placeholder="E-Mail">
          </div>
        </div>

        <!-- Project Field -->
        <div class="field">
          <label>Type of Project</label>
          <input type="text" v-model="project" name="projectType" placeholder="Type of Project">
        </div>

        <!-- Information Field -->
        <div class="field">
          <label>Additional Information</label>
          <textarea type="text" v-model="information" name="information" placeholder="Additional Information"></textarea>
        </div>

        <!-- Submit Button -->
        <button class="ui fluid large blue button" type="submit">Submit</button>
      </form>
    </div>

    <div class="ui hidden divider"></div>
    <p id="sub-text">You can of course also contact me directly via <a href="mailto:elias_frigard@hotmail.com">e-mail.</a></p>
  </div>
</template>

/* Script */
<script>
  export default {
    name: 'Contact',
    data() {
      return {
        name: null,
        email: null,
        project: null,
        information: null
      }
    },
    methods: {
      submitForm() {      
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Project: ${this.project}`);
        console.log(`Information: ${this.information}`);

        this.name = ''
        this.email = ''
        this.project = ''
        this.information = ''
      }
    }
  }
</script>

/* Style */
<style scoped>
  #contact {
    padding: 40px;
    border-radius: 5px;
    width: 95%;
    max-width: 800px;
    background-color: white;

    -webkit-box-shadow: 1px -3px 7px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 1px -3px 7px 0px rgba(0,0,0,0.3);
    box-shadow: 1px -3px 7px 0px rgba(0,0,0,0.3);
  }

  #contact-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    width: 100%;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 60%, rgba(0,55,77,1) 40%);
  }

  #sub-text {
    color: white;
  }
</style>
