<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
  
</template>

<script>

import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

