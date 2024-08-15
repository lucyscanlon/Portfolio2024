<template>
  <div class="header-nav-bar-container">
    <div class="header-name-left-container">
      <div class="header-name-container">
        <RouterLink to="/"><h1 @click="homeActive()">Lucy Scanlon</h1></RouterLink>
      </div>
    
    </div>
    <div class="header-nav-right-container">
      <div class="navigation-list-container">
        <ul class="larger-full-menu-container">
          <RouterLink to="/"><li @click="homeActive()" v-bind:class="(this.activePage === 0) ? 'navSelected' : ''">Home</li></RouterLink>
          <RouterLink to="/portfolio"><li @click="portfolioActive()" v-bind:class="(this.activePage === 1) ? 'navSelected' : ''">Portfolio</li></RouterLink>
          <a href="https://github.com/lucyscanlon" target="_blank"><li>Github</li></a>
        </ul>
        <ul class="smaller-burger-menu-container">
          <li @click="openSmallMenu()"><font-awesome-icon icon="fa-solid fa-bars" /> Menu</li>
        </ul>
      </div>

    </div>
  </div>
  <SmallerScreenMenu v-bind:menuOpen=smallMenuOpen @close-small-menu="recieveMenuEmit"></SmallerScreenMenu>
</template>

<script>

import SmallerScreenMenu from './SmallerScreenMenuNav.vue'
export default {
  name: 'NavBar',
  components: {
    SmallerScreenMenu,
  },
  data() {
    return {
      activePage: 0,
      smallMenuOpen: false,
    }
  },
  methods: {
    homeActive() {
      this.activePage = 0;
    },

    portfolioActive() {
      this.activePage = 1;
    },

    openSmallMenu() {
      this.smallMenuOpen = true;
      document.body.style.overflow = 'hidden';
      
    },

    recieveMenuEmit() {
      this.smallMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
}
</script>

