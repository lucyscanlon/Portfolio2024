<template>
    <div class="portfolioglimpse-whole-container">
        <div class="portglimpse-title-container">
            <h2>My Projects</h2>
        </div>
        <div class="portglimpse-desc-container">
            <p>A small glimpse at a few of examples of my work.</p>
            <RouterLink to="/portfolio"><button>View full portfolio</button></RouterLink>
        </div>
        <div class="portfolioreel-flex-container">
            <div class="portfolioreel-leftarrow-container">
                <p @click="previousSlide()"><font-awesome-icon v-if="currentSlide !== 0" icon="fa-solid fa-circle-arrow-left" /></p>
            </div>
            <div class="portfolioreel-whole-container">
                <div v-if="currentSlide === 0" class="portfolioreel-padding">
                    <div class="portfolio-reel-wrapper">
                        <div class="portfolioreel-image-container">
                            <img src="/CashCoursePreview.png">
                        </div>
                        <LanguagesUsed listOfTech="Vue JS, Pinia, JavaScript, HTML, CSS"></LanguagesUsed>
                        <div class="portfolioreel-title-container">
                            <h3>Cash Course: An Interactive Financial Education Game</h3>
                        </div>
                        <div class="portfolioreel-desc-container">
                            <p>An interactive JavaScript game built using Vue JS, which educates players about personal finance concepts and encourages players to make responsible decisions. This project was developed as my final project in my third year of university and I was awarded a first for this project.</p>
                        </div>
                        <div class="portfolioreel-github-button-container">
                            <a href="https://github.com/lucyscanlon/FinanceGame/tree/main" target="_blank"><button>View on Github</button></a>
                        </div>
                    </div>
                </div>
                <div v-if="currentSlide === 1" class="portfolioreel-padding">
                    <div class="portfolio-reel-wrapper">
                        <div class="portfolioreel-image-container">
                            <img src="/DeadlineDashPreview.png">
                        </div>
                        <LanguagesUsed listOfTech="p5.js"></LanguagesUsed>
                        <div class="portfolioreel-title-container">
                            <h3>Deadline Dash: An Arcade Game Inspired By exam season</h3>
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
                <div v-if="currentSlide === 2" class="portfolioreel-padding">
                    <div class="portfolio-reel-wrapper">
                        <div class="portfolioreel-image-container">
                            <img src="/PicassoFiltersPreview.png">
                        </div>
                        <LanguagesUsed listOfTech="p5.js, ml5.js"></LanguagesUsed>
                        <div class="portfolioreel-title-container">
                            <h3>Picasso Face Filters</h3>
                        </div>
                        <div class="portfolioreel-desc-container">
                            <p>A project built using ml5.js face mapping to create a series of face filters inspired by Picasso's self portraits. This project was created for my machine learning class at university.</p>
                        </div>
                        <div class="portfolioreel-github-button-container">
                            <a href="https://github.com/lucyscanlon/PicassoFaceFilters" target="_blank"><button>View on Github</button></a>
                        </div>
                    </div>
                </div>
                <div v-if="currentSlide === 3" class="portfolioreel-padding">
                    <div class="portfolio-reel-wrapper">
                        <div class="portfolioreel-image-container">
                            <img src="/TadpoleGamePreview.png">
                        </div>
                        <LanguagesUsed listOfTech="C++"></LanguagesUsed>
                        <div class="portfolioreel-title-container">
                            <h3>Tadpole Tamagotchi</h3>
                        </div>
                        <div class="portfolioreel-desc-container">
                            <p>A project built using C++ on xCode inspired by Tamagotchi games.</p>
                        </div>
                        <div class="portfolioreel-github-button-container">
                            <a href="https://github.com/lucyscanlon/Frog-tamagatchi" target="_blank"><button>View on Github</button></a>
                        </div>
                    </div>
                </div>
                <div v-if="currentSlide === 4" class="portfolioreel-padding">
                    <div class="portfolio-reel-wrapper">
                        <div class="portfolioreel-image-container">
                            <img src="/MarsRoverGame.png">
                        </div>
                        <LanguagesUsed listOfTech="p5.js, p5.sound.js"></LanguagesUsed>
                        <div class="portfolioreel-title-container">
                            <h3>Mars Rover Game</h3>
                        </div>
                        <div class="portfolioreel-desc-container">
                            <p>A game inspired by Super Mario Bros where players control the Mars Rover and collect plant samples.</p>
                        </div>
                        <div class="portfolioreel-github-button-container">
                            <a href="https://github.com/lucyscanlon/MarsRoverGame" target="_blank"><button>View on Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolioreel-rightarrow-container">
                <p @click="nextSlide()"><font-awesome-icon v-if="currentSlide !== 4" icon="fa-solid fa-circle-arrow-right" /></p>
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
            currentSlide: 0,
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