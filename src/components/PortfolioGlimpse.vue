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
        <div class="portfolioreel-flex-container">
            <div class="portfolioreel-leftarrow-container">
                <p @click="previousSlide()"><font-awesome-icon icon="fa-solid fa-arrow-left" /></p>
            </div>
            <div v-if="currentSlide === 0" class="portfolioreel-whole-container">
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
            <div v-if="currentSlide === 1" class="portfolioreel-whole-container">
                <div class="portfolioreel-padding">
                    <div class="portfolioreel-title-container">
                        <h2>Deadline Dash: An Arcade Game Inspired By exam season</h2>
                    </div>
                    <LanguagesUsed listOfTech="p5.js"></LanguagesUsed>
                    <div class="portfolioreel-image-container">
                        <img src="/DeadlineDashPreview.png">
                    </div>
                    <div class="portfolioreel-desc-container">
                        <p>An interactive game inspired by exam season at university. This game was created for my class Expressive Game Design where we made a game that reflected a real life experience. This game is published and playable on itch.io.</p>
                    </div>
                    <div class="portfolioreel-github-button-container">
                        <a href="https://lucyscanlon.itch.io/deadline-dash" target="_blank"><button>Play on Itch.io</button></a>
                        <a href="https://github.com/lucyscanlon/DeadlineDash" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
            <div v-if="currentSlide === 2" class="portfolioreel-whole-container">
                <div class="portfolioreel-padding">
                    <div class="portfolioreel-title-container">
                        <h2>Picasso Face Filters</h2>
                    </div>
                    <LanguagesUsed listOfTech="p5.js, ml5.js"></LanguagesUsed>
                    <div class="portfolioreel-image-container">
                        <img src="/PicassoFiltersPreview.png">
                    </div>
                    <div class="portfolioreel-desc-container">
                        <p>A project built using ml5.js face mapping to create a series of face filters inspired by Picasso's self portraits. This project was created for my machine learning class at university.</p>
                    </div>
                    <div class="portfolioreel-github-button-container">
                        <a href="https://github.com/lucyscanlon/PicassoFaceFilters" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
            <div class="portfolioreel-rightarrow-container">
                <p @click="nextSlide()"><font-awesome-icon icon="fa-solid fa-arrow-right" /></p>
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
    }, data() {
        return {
            currentSlide: 1,
        }
    }, methods: {
        nextSlide() {
            this.currentSlide = this.currentSlide + 1;
        },

        previousSlide() {
            this.currentSlide = this.currentSlide - 1;
        }
    }
  }
  </script>