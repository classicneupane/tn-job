import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import {
    VRow,
    VCol,
    VBtn,
    VImg,
    VSpacer,
    VAvatar,
    VSheet,
    VChip,
    VDialog,
    VCard,
    VCardTitle,
    VContainer,

} from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from '../layouts/Embed.vue'
import { EmbedConfig } from '../embed.types'

const vuetify = createVuetify({
    theme: false,
    components: {
        VRow,
        VCol,
        VBtn,
        VImg,
        VSpacer,
        VAvatar,
        VSheet,
        VChip,
        VDialog,
        VCard,
        VCardTitle,
        VContainer,
    },
    directives
})

const props = {
    id: '',
    key: '',
    config: {
        cols: {
            xs: 12,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 3
        }
    } as EmbedConfig
}

const target = `[data-key="tb-jobs"]`;

function mount() {
    const targetEl = document.querySelector(target)

    props.key = targetEl?.getAttribute('data-key') || ''
    props.id = targetEl?.getAttribute('data-biz-id') || ''

    const parseAttr = (key: string) => {
        try {
            return JSON.parse(targetEl?.getAttribute(key) || '')
        }
        catch (e) {
            console.error(e)
        }
        return {}
    }

    props.config.cols = { ...props.config.cols, ...parseAttr("data-cols") };

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