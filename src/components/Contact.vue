/* HTML Template */
<template>
  <div id="contact-container">
    <h1 class="ui center aligned icon header">
      Contact Me!
    </h1>
    <br>

    <div class="ui container">
      <p>Do you need help with realising your next software project? Please contact me and we will make it work! <br>I am always looking for new and exiting projects and problems to solve.</p>
    </div><br>

    <div class="ui hidden divider"></div>

    <div id="contact">
      <form class="ui form">
        <div class="two fields">
          <div class="field">
            <label>Name</label>
            <input type="text" name="last-name" placeholder="Last Name">
          </div>
          <div class="field">
            <label>E-Mail</label>
            <input type="text" name="last-name" placeholder="Last Name">
          </div>
        </div>

        <div class="field">
          <label>Type of Project</label>
          <input type="text" name="last-name" placeholder="Last Name">
        </div>

        <div class="field">
          <label>Text</label>
          <textarea></textarea>
        </div>

        <button class="ui fluid blue button" type="submit">Submit</button>
      </form>

    </div>
  </div>
</template>

/* Script */
<script>
  export default {
    name: 'Contact',
    data() {
      return {

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
</style>
