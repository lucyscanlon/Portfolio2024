<template>
    <div class="languagesused-information-container">
        <p><font-awesome-icon icon="fa-solid fa-code" />{{listOfTech}}</p>
    </div>
    
   
</template>
  
  <script>
  export default {
    name: 'LanguagesUsed',
    props: {
        listOfTech: String,
    }
  }
  </script>