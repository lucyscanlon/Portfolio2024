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
                <span v-bind:class="(AllStatus === 1) ? 'green-fill' : ''"><button @click="allPress()">All</button></span>
                <span v-bind:class="(VueStatus === 1) ? 'green-fill' : ''"><button @click="VuePress()">Vue JS</button></span>
                <span v-bind:class="(p5Status === 1) ? 'green-fill' : ''"><button @click="p5Press()">p5.js</button></span>
                <span v-bind:class="(CStatus === 1) ? 'green-fill' : ''"><button @click="CPress()">C++</button></span>
                <span v-bind:class="(WordPressStatus === 1) ? 'green-fill' : ''"><button @click="WordPressPress()">WordPress</button></span>
                <span v-bind:class="(FreelanceStatus === 1) ? 'green-fill' : ''"><button @click="freelancePress()">Freelance</button></span>
                <span v-bind:class="(VanJSStatus === 1) ? 'green-fill' : ''"><button @click="VanJSPress()">Vanilla JavaScript</button></span>
                <span v-bind:class="(ml5Status === 1) ? 'green-fill' : ''"><button @click="ml5Press()">ml5.js</button></span>
            </div>
        </div>
        <div v-if="((this.VueStatus === 1) || (this.AllStatus === 1) )" class="portfull-project-container">
            <div class="portfull-image-container cashcourseimage">
                <!--<img src="/CashCoursePreview.png">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>Cash Course: An Interactive Financial Education Game</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="Vue JS, Pinia, JavaScript, HTML, CSS"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>An interactive JavaScript game built using Vue JS, which educates players about personal finance concepts and encourages players to make responsible decisions. This project was developed as my final project in my third year of university and I was awarded a first for this project.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://www.cashcourse.online/" target="_blank"><button>Play Game</button></a>
                        <a href="https://github.com/lucyscanlon/FinanceGame" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((this.VueStatus === 1) || (this.AllStatus === 1) )" class="portfull-project-container">
            <div class="portfull-image-container portfoliositeimage">
                <!--<img src="/CashCoursePreview.png">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>This Website! My portfolio</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="Vue JS, JavaScript, HTML, CSS"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>This website was built using Vue js to display my projects.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://github.com/lucyscanlon/Portfolio2024" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((this.p5Status === 1) || (this.AllStatus === 1) )" class="portfull-project-container">
            <div class="portfull-image-container deadlinedash-img deadlinedashimage">
                <!--<img src="/DeadlineDashPreview.png">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>Deadline Dash: An Arcade Game Inspired By exam season</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="p5.js"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>An interactive game inspired by exam season at university. This game was created for my class Expressive Game Design where we made a game that reflected a real life experience. This game is published and playable on itch.io</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://lucyscanlon.itch.io/deadline-dash" target="_blank"><button>Play Game</button></a>
                        <a href="https://github.com/lucyscanlon/DeadlineDash" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((this.p5Status === 1) || (this.AllStatus === 1) || (this.ml5Status === 1) )" class="portfull-project-container">
            <div class="portfull-image-container picassofilterimage">
                <!--<img src="/PicassoFiltersPreview.png">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>Picasso Face Filters</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="p5.js, ml5.js"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>A project built using ml5.js face mapping to create a series of face filters inspired by Picasso's self portraits. This project was created for my machine learning class at university.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://github.com/lucyscanlon/PicassoFaceFilters" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((this.CStatus === 1) || (this.AllStatus === 1))" class="portfull-project-container">
            <div class="portfull-image-container deadlinedash-img tadpolegameimage">
                <!--<img src="/TadpoleGamePreview2.png">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding ">
                    <div class="portfull-project-title-container">
                        <h2>Tadpole Tamagotchi</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="C++"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>A project built using C++ on xCode inspired by Tamagotchi games.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://github.com/lucyscanlon/Frog-tamagatchi" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((this.p5Status === 1) || (this.AllStatus === 1))" class="portfull-project-container">
            <div class="portfull-image-container marsroverimage">
                <!--<img src="/MarsRoverGame.png">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>Mars Rover Game</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="p5.js, p5.sound.js"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>A game inspired by Super Mario Bros where players control the Mars Rover and collect plant samples.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://github.com/lucyscanlon/MarsRoverGame" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((this.VanJSStatus === 1) || (this.AllStatus === 1))" class="portfull-project-container">
            <div class="portfull-image-container hangmangameimage">
                <!--<img src="/Hangman.jpg">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>Hangman Game</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="Vanilla JS"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>A project which coded the classic game of Hangman using Vanilla JS.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://lucyscanlon.github.io/HangmanGame/" target="_blank"><button>Play Game</button></a>
                        <a href="https://github.com/lucyscanlon/HangmanGame" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((this.WordPressStatus === 1) || (this.AllStatus === 1) || (this.FreelanceStatus === 1))" class="portfull-project-container">
            <div class="portfull-image-container deadlinedash-img oakhamfarmimage">
                <!--<img src="/OakF.jpg">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>Oakham Farm Website</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="WordPress, PHP, HTML, CSS"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>A website designed and coded for a local farm advertising their fishing and timber services. This website was created as a custom WordPress theme.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://www.oakhamfarm.co.uk/" target="_blank"><button>View Website</button></a>
                        <a href="https://github.com/lucyscanlon/oakham-farm" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((this.WordPressStatus === 1) || (this.AllStatus === 1) || (this.FreelanceStatus === 1))" class="portfull-project-container">
            <div class="portfull-image-container deadlinedash-img trekimage">
                <!--<img src="/TrekPreview.png">-->
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>Trek - A Wordpress Theme for Travel Bloggers</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="WordPress, PHP, HTML, CSS"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>A WordPress theme I created in 2019 for travel bloggers. I sold this theme on Etsy and had 12 sales.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://github.com/lucyscanlon/trek" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="((AllStatus === 0) && (VueStatus === 0) && (p5Status === 0) && (CStatus === 0) && (WordPressStatus === 0) && (FreelanceStatus === 0) && (VanJSStatus === 0) && (ml5Status === 0))" class="portfull-noselection-container">
            <div class="portfull-noselection-padding">
                <div class="portfull-noselection-title-container">
                    <h2>You have no filters selected</h2>
                </div>
                <div class="portfull-noselection-desc-container">
                    <p>Please select a filter to see specific projects, or select the 'All' button to see all of my projects</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>

  import LanguagesUsed from './LangagesUsed.vue'

  export default {
    name: 'PortfolioFull',
    components: {
        LanguagesUsed,
    },
    data() {
        return {
            AllStatus: 1,
            VueStatus: 0,
            p5Status: 0,
            CStatus: 0,
            WordPressStatus: 0,
            FreelanceStatus: 0,
            VanJSStatus: 0,
            ml5Status: 0,
        }
    },
    methods: {
        VuePress() {
            if(this.VueStatus === 0) {
                this.VueStatus = 1;
            } else if (this.VueStatus === 1) {
                this.VueStatus = 0;
            }

            this.AllStatus = 0;
        },

        p5Press() {
            if(this.p5Status === 0) {
                this.p5Status = 1;
            } else if (this.p5Status === 1) {
                this.p5Status = 0;
            }

            this.AllStatus = 0;
        },

        CPress() {
            if(this.CStatus === 0) {
                this.CStatus = 1;
            } else if (this.CStatus === 1) {
                this.CStatus = 0;
            }

            this.AllStatus = 0;
        },

        WordPressPress() {
            if(this.WordPressStatus === 0) {
                this.WordPressStatus = 1;
            } else if (this.WordPressStatus === 1) {
                this.WordPressStatus = 0;
            }

            this.AllStatus = 0;
        },

        freelancePress() {
            if(this.FreelanceStatus === 0) {
                this.FreelanceStatus = 1;
            } else if (this.FreelanceStatus === 1) {
                this.FreelanceStatus = 0;
            }

            this.AllStatus = 0;
        },

        VanJSPress() {
            if(this.VanJSStatus === 0) {
                this.VanJSStatus = 1;
            } else if (this.VanJSStatus === 1) {
                this.VanJSStatus = 0;
            }

            this.AllStatus = 0;
        },

        ml5Press() {
            if(this.ml5Status === 0) {
                this.ml5Status = 1;
            } else if (this.ml5Status === 1) {
                this.ml5Status = 0;
            }

            this.AllStatus = 0;
        },

        allPress() {
            this.AllStatus = 1,
            this.VueStatus = 0,
            this.p5Status = 0,
            this.CStatus = 0,
            this.WordPressStatus = 0,
            this.FreelanceStatus = 0,
            this.VanJSStatus = 0,
            this.ml5Status = 0
        }
    }
  }
  </script>