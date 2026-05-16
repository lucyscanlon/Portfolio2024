<template>
    <div class="introduction-whole-container">
        <div class="introduction-padding">
            <div class="introduction-image-left-flex">
                <div class="polaroid-white-container">
                    <div class="polaroid-image-container">
                        <img src="/IntroductionImage.png">
                    </div>
                    <div class="polaroid-information-container">
                        <ul>
                            <li><font-awesome-icon icon="fa-solid fa-map-pin" />Oxfordshire</li>
                            <li><font-awesome-icon icon="fa-solid fa-envelope" />lucyisobelscanlon@gmail.com</li>
                            <a href="https://github.com/lucyscanlon" target="_blank"><li><font-awesome-icon icon="fa-brands fa-github" />github.com/lucyscanlon</li></a>
                        </ul>
                    </div>

                </div>

            </div>
            <div class="introduction-text-right-flex">
                <div class="introduction-text-padding">
                    <div class="introduction-heading-container">
                        <h1>Hi, I’m Lucy. A Web Developer in Oxfordshire.</h1>
                    </div>
                    <div class="introduction-description-container">
                        <p>I'm a Junior Web Developer based in Oxfordshire with agency and freelance experience. I build responsive, user-focused websites which help businesses communicate clearly, solve real world problems and turn visitors into customers. I’m passionate about continuously developing my skills and building high-quality digital experiences that follow industry best practices.</p>
                    </div>
                    <div class="introduction-grad-container">
                        <p><font-awesome-icon icon="fa-solid fa-user-graduate" /> First Class Honors Degree in Creative Computing</p>
                    </div>
                    <div class="introduction-buttons-container">
                        <a href="mailto:lucyisobelscanlon@gmail.com"><button class="email-button">Email me</button></a>
                        <RouterLink to="/portfolio"><button>View portfolio</button></RouterLink>
                    </div>
                </div>

            </div>
            

        </div>

    </div>
   
  </template>
  
  <script>
  export default {
    name: 'HelloSection',
  }
  </script>