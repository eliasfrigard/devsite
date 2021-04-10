<template>
  <div id="splash" class="ui container">
    <transition name="name">
      <h1>{{name}}</h1>
    </transition>
      <hr>
      <h2>{{quote}}</h2>
      <img src="../assets/cslogo2.png" alt="cs" id="csimage">
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data() {
    return {
      showTitle: true,
      name: "ELIAS FRIGÅRD",
      quote: "Developing Full-Stack Software"
    }
  }
}
</script>

<style scoped>
  #nav {
    position: absolute;
    top:10em;

  }
  #splash {
    height: 95vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 60px;
    margin: 20px;
    font-weight: 400;
  }

  h2 {
    font-weight: 400;
  }

   hr {
     min-width: 40%;
     opacity: 0.5;
   }

   #csimage {
     position: absolute;
     bottom: 0;
     margin-bottom: 55px;
     max-width: 90%;
   }

  .name-enter-active, .name-leave-active {
    transition: opacity 0.6s ease-in-out, transform 0.6s ease;
  }

  .name-enter-acitve {
    transition-delay: 0.6s;
  }

  .view-enter, .view-leave-to {
    opacity: 0;
  }

  .view-enter-to, .view-leave {
    opacity: 1;
  }

  @media only screen and (max-width: 600px) {
    hr {
      display: none;
    }
  }
</style>
