<template>
    <svg-icon type="mdi" :path="icon"></svg-icon>
</template>
  
  
<script>
import SvgIcon from '@jamescoyle/vue-icon';

export default {
    name: "icon",

    props: ['icon'],

    components: {
        SvgIcon
    },
}
</script>