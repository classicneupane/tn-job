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
import { SubtitlePosition } from '../types'

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
        },
        showBizAddress: true,
        showBizName: true,
        showLogo: true,
        showSubtitle: true,
        subtitlePosition: 'belowJobTitle'
    } as EmbedConfig
}

const configAttrs = {
    showBizAddress: 'biz-addr',
    showBizName: 'biz-name',
    showLogo: "biz-logo",
    subtitlePosition: "subtitle",
    config: {
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl"
    }
}

const target = `[data-key="tb-jobs"]`;

function parseConfig(el: Element | null) {
    if (!el) return;
    const falseValues = ['0', 'false'];

    props.key = el.getAttribute('data-key') || ''
    props.id = el.getAttribute('data-biz-id') || ''

    const getAttrValue = (key: string, defaultValue: any) => {
        const val = el.getAttribute(key)
        if (val) {
            if (falseValues.includes(val)) {
                return false
            }
        }
        if(key==='subtitle'){
            return val || 'belowJobTitle'
        }
        return defaultValue
    }

    props.config.showBizName = getAttrValue(configAttrs.showBizName, true)
    props.config.showBizAddress = getAttrValue(configAttrs.showBizAddress, true)
    props.config.showLogo = getAttrValue(configAttrs.showLogo, true)

    const subtitle = getAttrValue(configAttrs.subtitlePosition, '')
    const subtitlePosition = ['aboveLearnMore', 'belowJobTitle'] as SubtitlePosition[]

    if (subtitle) {
        if (falseValues.includes(subtitle)) {
            props.config.showSubtitle = false
        }
        else {
            props.config.showSubtitle = true
            if (subtitlePosition.includes(subtitle)) {
                props.config.subtitlePosition = subtitle
            }
        }
    }
    else{
        props.config.showSubtitle = false
    }

    const cols = ['xs', 'sm', 'md', 'lg', 'xl'] as Array<keyof typeof props.config.cols>
    cols.forEach((col) => {
        props.config.cols[col] = Number(el.getAttribute(col)) || props.config.cols[col]
    });
}

function mount() {
    const targetEl = document.querySelector(target);

    parseConfig(targetEl);

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