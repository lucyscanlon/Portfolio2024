<template>
    <div class="portfolioglimpse-whole-container">
        <div class="portglimpse-title-container">
            <h1>A few of my projects</h1>
        </div>
        <div class="portglimpse-desc-container">
            <p>A small glimpse at a few of examples of my work</p>
        </div>
        <div class="portglimpse-button-container">
            <button>View Full Portfolio</button>
        </div>
        <div class="portfolioreel-whole-container">
            <div class="portfolioreel-padding">
                <div class="portfolioreel-title-container">
                    <h2>Cash Course: An Interactive Financial Education Game</h2>
                </div>
                <LanguagesUsed listOfTech="Vue JS, JavaScript, HTML, CSS"></LanguagesUsed>
                <div class="portfolioreel-image-container">
                    <img src="/CashCoursePreview.png">
                </div>
                <div class="portfolioreel-desc-container">
                    <p>An interactive JavaScript game built using Vue JS, which educates players about personal finance concepts and encourages players to make responsible decisions. This project was developed as my final project in my third year of university and I was awarded a first for this project.</p>
                </div>
                <div class="portfolioreel-github-button-container">
                    <a href="https://github.com/lucyscanlon/FinanceGame/tree/main" target="_blank"><button>View on Github</button></a>
                </div>
            </div>
            
        </div>

    </div>
   
  </template>
  
  <script>

  import LanguagesUsed from './LangagesUsed.vue'

  export default {
    name: 'PortfolioGlimpse',
    components: {
        LanguagesUsed,
    }
  }
  </script>