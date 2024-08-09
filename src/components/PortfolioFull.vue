<template>
    <div class="portfull-whole-container">
        <div class="portfull-title-container">
            <h1>My Portfolio</h1>
        </div>
        <div class="portfull-language-selector-container">
            <div class="portfull-desc-container">
                <p>Filter projects using the buttons below:</p>
            </div>
            <div class="portfull-language">
                <span v-bind:class="(AllStatus === 1) ? 'green-fill' : ''"><button>All</button></span>
                <button v-bind:class="(VueStatus === 1) ? 'green-fill' : ''">Vue JS</button>
                <button v-bind:class="(p5Status === 1) ? 'green-fill' : ''">p5.js</button>
                <button v-bind:class="(CStatus === 1) ? 'green-fill' : ''">C++</button>
                <button v-bind:class="(WordPressStatus === 1) ? 'green-fill' : ''">WordPress</button>
                <button v-bind:class="(Freelance === 1) ? 'green-fill' : ''">Freelance</button>
                <button v-bind:class="(VanJSStatus === 1) ? 'green-fill' : ''">Vanilla JavaScript</button>
                <button v-bind:class="(ml5Status === 1) ? 'green-fill' : ''">ml5.js</button>
            </div>
        </div>
        <div class="portfull-project-container">
            <div class="portfull-image-container">

            </div>
            <div class="portfull-info-container">

            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'PortfolioFull',
    data() {
        return {
            AllStatus: 1,
            VueStatus: 0,
            p5Status: 0,
            CStatus: 0,
            WordPressStatus: 0,
            Freelance: 0,
            VanJSStatus: 0,
            ml5Status: 0,
        }
    },
  }
  </script>