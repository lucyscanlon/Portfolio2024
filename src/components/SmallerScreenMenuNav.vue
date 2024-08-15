<template>
    <div class="small-menu-container" v-bind:class="(menuOpen === true) ? 'small-menu-open' : ''">
        <div class="small-menu-padding">
            <div class="small-menu-title">
                <h2>Menu</h2>
            </div>
            <div class="small-menu-list-container">
                <ul>
                    <RouterLink to="/" @click="closeMenuEmit()"><li>Home</li></RouterLink>
                    <RouterLink to="/portfolio" @click="closeMenuEmit()"><li>Portfolio</li></RouterLink>
                    <a href="https://github.com/lucyscanlon" target="_blank" @click="closeMenuEmit()"><li>Github</li></a>
                </ul>
            </div>
            <div class="small-menu-close-container">
                <h2 @click="closeMenuEmit()"><font-awesome-icon icon="fa-solid fa-x" /> Close</h2>
            </div>
        </div>

    </div>
</template>
  
<script>
  export default {
    name: 'SmallerScreenMenu',
    props: {
        menuOpen: Boolean,
    },
    methods: {
        closeMenuEmit() {
            this.$emit('close-small-menu');
        }
    }
  }

</script>