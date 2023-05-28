import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './layouts/Embed.vue'
import './assets/embed.scss';

const vuetify = createVuetify({
    components,
    directives
})

const props = {
    id: '',
    key: ''
}

const target = `[data-key="tb-jobs"]`;

function mount() {
    const targetEl = document.querySelector(target)

    props.key = targetEl?.getAttribute('data-key') || ''
    props.id = targetEl?.getAttribute('data-biz-id') || ''

    if (targetEl) {
        const app = createApp(App, props)
        app.use(vuetify)
        app.mount(target)
    }
    else {
        requestAnimationFrame(mount)
    }
}

window.addEventListener("load", () => {
    mount()
})

if (document.readyState === 'complete') {
    mount()
}