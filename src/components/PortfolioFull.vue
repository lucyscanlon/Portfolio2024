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
            <div class="portfull-image-container">
                <img src="/CashCoursePreview.png">
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container">
                        <h2>Cash Course: An Interactive Financial Education Game</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="Vue JS, JavaScript, HTML, CSS"></LanguagesUsed>
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
            <div class="portfull-hr-container">
            </div>
        </div>
        <div v-if="((this.p5Status === 1) || (this.AllStatus === 1) )" class="portfull-project-container">
            <div class="portfull-image-container deadlinedash-img">
                <img src="/DeadlineDashPreview.png">
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding">
                    <div class="portfull-project-title-container deadlinedash-padding">
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
            <div class="portfull-hr-container">
            </div>
        </div>
        <div v-if="((this.p5Status === 1) || (this.AllStatus === 1) )" class="portfull-project-container">
            <div class="portfull-image-container">
                <img src="/PicassoFiltersPreview.png">
            </div>
            <div class="portfull-info-container">
                <div class="portfull-project-padding picassoproject-padding">
                    <div class="portfull-project-title-container deadlinedash-padding">
                        <h2>Picasso Face Filters</h2>
                    </div>
                    <div class="portfull-project-langused-container">
                        <LanguagesUsed listOfTech="p5.js"></LanguagesUsed>
                    </div>
                    <div class="portfull-project-desc-container">
                        <p>A project built using ml5.js face mapping to create a series of face filters inspired by Picasso's self portraits. This project was created for my machine learning class at university.</p>
                    </div>
                    <div class="portfull-project-buttons-container">
                        <a href="https://github.com/lucyscanlon/PicassoFaceFilters" target="_blank"><button>View on Github</button></a>
                    </div>
                </div>
            </div>
            <div class="portfull-hr-container">
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