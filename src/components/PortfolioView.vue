<template>
    <NavBar></NavBar>
    <PortfolioFull></PortfolioFull>
</template>
  
<script>

import NavBar from './NavBar.vue'
import PortfolioFull from './PortfolioFull.vue'


  export default {
    name: 'PortfolioView',
    components: {
        NavBar,
        PortfolioFull,
    }
  }
</script>