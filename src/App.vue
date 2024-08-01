<template>
  <NavBar></NavBar>
  <HelloSection></HelloSection>
  <PortfolioGlimpse></PortfolioGlimpse>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import HelloSection from './components/Hello.vue'
import PortfolioGlimpse from './components/PortfolioGlimpse.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HelloSection,
    PortfolioGlimpse,
  }
}
</script>

