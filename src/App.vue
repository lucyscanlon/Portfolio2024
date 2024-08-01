<template>
  <NavBar></NavBar>
  <HelloSection></HelloSection>
  <PortfolioGlimpse></PortfolioGlimpse>
  <WorkExperience></WorkExperience>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import HelloSection from './components/Hello.vue'
import PortfolioGlimpse from './components/PortfolioGlimpse.vue'
import WorkExperience from './components/WorkExperience.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HelloSection,
    PortfolioGlimpse,
    WorkExperience,
  }
}
</script>

