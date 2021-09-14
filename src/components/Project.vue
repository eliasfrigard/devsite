<template>
  <div id="project" @mouseover="hover = true" @mouseleave="hover = false">
    <transition name="fade">
      <div id="content" v-if="hover">
        <h3>{{title}}</h3>
        <p>{{description}}</p>

        <div class="ui buttons">
          <button class="ui inverted green button">Visit Repo</button>
          <div class="or"></div>
          <button class="ui inverted red button">Show Demo</button>
        </div>
      </div>
    </transition>
    
    <img v-bind:src="require('@/assets/images/' + src)" alt="image" id="projectimg">
  </div>
</template>

<script>

export default {
  name: 'Project',
  props: {
    title: String,
    description: String,
    src: String,
  },
  data() {
    return {
      hover: false,
    }
  },
}
</script>

<style scoped>
  p {
    font-size: 14px;
    line-height: 1.5;
  }

  #project {
    cursor: pointer;
    position: relative;
    height: 220px;
    width: 302px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    -webkit-box-shadow: 1px 3px 7px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 1px 3px 7px 0px rgba(0,0,0,0.3);
    box-shadow: 1px 3px 7px 0px rgba(0,0,0,0.3);
  }

  #projectimg {
    height: 100%;
    width: 100%;
    object-fit:fill;
    border-radius: 7px;
  }

  #content {
    border-radius: 7px;
    color: white;
    height: 100%;
    width: 100%;
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #023246cb;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
