import { createApp } from 'vue'
import App from './layouts/Embed.vue'

const src = (document.currentScript as any).src as string;

// import vuetifyStyles from 'vuetify/styles/main.css'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import {VBtn, VIcon, VChip, VRow, VCol, VDialog, VMenu, VSpacer, VImg} from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components: {
        VBtn,
        VIcon,
        VChip,
        VRow,
        VCol,
        VDialog,
        VMenu,
        VSpacer,
        VImg
    },
    directives
})

// function injectCss(styleData: string){
//     let link = document.createElement("style") as any
//     link.rel = "stylesheet"
//     link.type = "text/css"
//     link.textContent = styleData

//     try{
//             document.body.appendChild(link)
//     }
//     catch{
//             document.firstElementChild?.appendChild(link)
//     }
// }

// injectCss(vuetifyStyles)

function getParameterByName(name:string, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const BUSINESS_ID = getParameterByName('id', src) as string

const target = '#tb-jobs';

function mount(){
    const targetEl = document.querySelector(target)
    if(targetEl){
        const app = createApp(App, {id: BUSINESS_ID})
        app.use(vuetify)
        app.mount(target)
    }
    else{
        requestAnimationFrame(mount)
    }
}

window.addEventListener("load", () =>{
    mount()
})