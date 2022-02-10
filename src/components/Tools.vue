<template>
  <div class="ui container" id="tools">
    <!-- Section descriptor. -->
    <p>
      These are some of the tools that I use. I enjoy learning new technologies
      and using the best tools available.
    </p>

    <!-- All the tool icons. -->
    <div id="tools-container">
      <div
        v-for="tool in tools"
        :key="tool.id"
        :data-tooltip="tool.tooltip"
        @click.prevent="handleToolClick(tool.link)"
      >
        <img class="tool-icon" :src="tool.icon" />
      </div>
    </div>
  </div>
</template>

<script>
import tools from '/tools.json'

export default {
  name: 'Tools',
  data() {
    return {
      tools: tools,
    }
  },
  methods: {
    handleToolClick(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

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
  max-height: 50px;
  max-width: 50px;
  margin: 20px;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .tool-icon {
    max-height: 50px;
    max-width: 50px;
    margin: 20px;
  }

  .break {
    display: none;
  }

  #tools-container {
    padding: 0;
  }
}
</style>
