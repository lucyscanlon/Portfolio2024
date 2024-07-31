<template>
  <NavBar></NavBar>
  <HelloSection></HelloSection>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import HelloSection from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HelloSection,
  }
}
</script>

