<template>
    <NavBar></NavBar>
    <HelloSection></HelloSection>
    <PortfolioGlimpse></PortfolioGlimpse>
    <WorkExperience></WorkExperience>
</template>
  
<script>

import NavBar from './NavBar.vue'
import HelloSection from './Hello.vue'
import PortfolioGlimpse from './PortfolioGlimpse.vue'
import WorkExperience from './WorkExperience.vue'

  export default {
    name: 'HomepageView',
    components: {
        NavBar,
        HelloSection,
        PortfolioGlimpse,
        WorkExperience
    }
  }
</script>