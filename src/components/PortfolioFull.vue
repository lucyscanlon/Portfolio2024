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
                <span v-bind:class="(FreelanceStatus === 1) ? 'green-fill' : ''"><button @click="FreelancePress()">Freelance</button></span>
                <span v-bind:class="(VanJSStatus === 1) ? 'green-fill' : ''"><button @click="VanJSPress()">Vanilla JavaScript</button></span>
                <span v-bind:class="(ml5Status === 1) ? 'green-fill' : ''"><button @click="ml5Press()">ml5.js</button></span>
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