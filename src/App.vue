<template>
  <img alt="Vue logo" :src="urlLogo" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import HelloWorld from '~/components/HelloWorld.vue'
import Logo from '~/assets/logo.png'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup: () => {
    const urlLogo = computed(() => Logo)

    return { urlLogo }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
