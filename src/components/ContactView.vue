<template>
    <NavBar></NavBar>
    <ContactForm></ContactForm>
</template>
  
<script>

import NavBar from './NavBar.vue'
import ContactForm from './ContactForm.vue'


  export default {
    name: 'ContactView',
    components: {
        NavBar,
        ContactForm,
    }
  }
</script>