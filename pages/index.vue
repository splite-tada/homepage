<template>
  <div>
    <header>
      <div id="waves">
        <img id="wave1" src="~/assets/image/wave1.png"/>
        <img id="wave2" src="~/assets/image/wave2.png"/>
      </div>
      <img id="bubble" src="~/assets/image/bubble.png"/>
      <img id="splite" src="~/assets/image/splite.svg"/>
      <div id="scroll-group">
        <img id="scroll-img" src="~/assets/image/scroll.svg"/>
        <div id="scroll">scroll</div>
      </div>
    </header>
    <div style="height: 1300px"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
