<template>
  <div class="header-nav-bar-container">
    <div class="header-name-left-container">
      <div class="header-name-container">
        <RouterLink to="/"><h1 @click="homeActive()">Lucy Scanlon</h1></RouterLink>
      </div>
    
    </div>
    <div class="header-nav-right-container">
      <div class="navigation-list-container">
        <ul>
          <RouterLink to="/"><li @click="homeActive()" v-bind:class="(this.activePage === 0) ? 'navSelected' : ''">Home</li></RouterLink>
          <RouterLink to="/portfolio"><li @click="portfolioActive()" v-bind:class="(this.activePage === 1) ? 'navSelected' : ''">Portfolio</li></RouterLink>
          <a href="https://github.com/lucyscanlon" target="_blank"><li>Github</li></a>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activePage: 0,
    }
  },
  methods: {
    homeActive() {
      this.activePage = 0;
    },

    portfolioActive() {
      this.activePage = 1;
    }
  }
}
</script>

