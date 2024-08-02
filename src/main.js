import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faUserGraduate)
library.add(faEnvelope)
library.add(faMapPin)
library.add(faCode)
library.add(faArrowLeft)
library.add(faArrowRight)
library.add(faGithub)
library.add(faCalendarDays)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon).mount("#app");
