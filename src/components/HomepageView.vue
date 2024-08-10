<template>
    <HelloSection></HelloSection>
    <PortfolioGlimpse></PortfolioGlimpse>
    <WorkExperience></WorkExperience>
</template>
  
<script>

import HelloSection from './Hello.vue'
import PortfolioGlimpse from './PortfolioGlimpse.vue'
import WorkExperience from './WorkExperience.vue'

  export default {
    name: 'HomepageView',
    components: {
        HelloSection,
        PortfolioGlimpse,
        WorkExperience
    }
  }
</script>