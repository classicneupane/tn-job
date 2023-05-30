<script setup lang="ts">
import { JobFeature } from '../types';

defineProps<{
  feature: JobFeature;
  selected?: boolean;
}>();
const emit = defineEmits(['click']);

function onClick() {
  emit('click');
}
</script>

<template>
  <v-chip
    :key="feature.id"
    class="mx-1 mb-2 text-capitalize cursor-pointer"
    :class="`${selected ? 'text-' + feature.textColor : ''}`"
    :color="feature.color"
    :variant="selected ? 'flat' : 'tonal'"
    rounded
    @click="onClick"
  >
    <v-icon v-if="selected">
      {{ 'mdi-check' }}
    </v-icon>
    <span>
      {{ feature.label }}
    </span>
  </v-chip>
</template>
