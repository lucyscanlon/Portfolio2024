import { createApp } from 'vue'
import App from './App.vue'
import './styles/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

library.add(faUserGraduate)
library.add(faEnvelope)
library.add(faMapPin)
library.add(faCode)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon).mount("#app");
