<template>
  <div class="header-nav-bar-container">
    <div class="header-name-left-container">
      <div class="header-name-container">
        <h1>Lucy Scanlon</h1>
      </div>
    
    </div>
    <div class="header-nav-right-container">
      <div class="navigation-list-container">
        <ul>
          <RouterLink to="/"><li class="colour-green">Home</li></RouterLink>
          <RouterLink to="/portfolio"><li>Portfolio</li></RouterLink>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

