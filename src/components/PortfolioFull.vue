<template>
    <div class="header-nav-bar-container">
      <div class="header-name-left-container">
        <div class="header-name-container">
          <h1>PortfolioFull</h1>
        </div>
      
      </div>
      <div class="header-nav-right-container">
        <div class="navigation-list-container">
          <ul>
            <li class="colour-green">Home</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
  
      </div>
    </div>
    <RouterView />
  </template>
  
  <script>
  export default {
    name: 'PortfolioFull',
  }
  </script>