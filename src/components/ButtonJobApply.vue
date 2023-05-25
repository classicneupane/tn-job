<script setup lang="ts">
import { Business, Job } from '../types';
import { ref, computed, onMounted, reactive } from 'vue'
import { addressFormatter, getPhoneNumbers } from './utils'

const props = defineProps<{
    color?: string;
    disableApply?: boolean;
    business: Business;
    job: Job;
    variant?: any;
}>();

const mounted = ref(false);
const email = computed(() => {
    return {
        job: String(props.business?.jobsContact?.email || '').trim(),
        biz: String(props.business?.email || '').trim(),
    };
});

onMounted(async () => {
    mounted.value = true;
});

const phones = computed(() => {
    return getPhoneNumbers(props.business, { job: true } as any);
});

const address = computed(() => {
    return props.business.mailingAddress;
});

const mapAddress = computed(() => {
    return [address.value?.street, address.value?.town, address.value?.state, address.value?.zip]
        .filter(i => !!i)
        .join(', ');
});

const dialogs = reactive({
    callMessage: false,
    address: false,
    value: false,
    map: false,
});

const showButton = computed(() => {
    const show = email.value.job || email.value.biz || address.value?.street || phones.value?.length;
    return show;
});

function applyJob() {
    if (props.disableApply) {
        return;
    }
    if (email.value.job || email.value.biz) {
        const url = `mailto:${email.value.job || email.value.biz}?subject=Application for ${props.job.title}`;
        window.open(url, '_blank');
    } else if (phones.value.length) {
        dialogs.value = true;
        dialogs.callMessage = true;
    } else if (address.value.street) {
        dialogs.address = true;
        dialogs.value = true;
    }
}
</script>
<template>
    <div v-if="mounted">
        <v-dialog v-model="dialogs.value" width="500">
            <v-card class="mx-auto w-100">
                <v-card-title class="d-flex">
                    <v-spacer />
                    <v-btn icon variant="text" @click="dialogs.value = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-container>
                    <div v-if="dialogs.callMessage">
                        <div class="mb-5 text-center">
                            {{ phones[0] }}
                        </div>
                        <div class="d-flex justify-center pb-5">
                            <a :href="`tel:${phones[0]}`" target="_blank" class="decoration-none">
                                <div class="d-flex flex-column justify-center align-center">
                                    <v-btn variant="tonal" icon color="info">
                                        <v-icon> mdi-phone </v-icon>
                                    </v-btn>
                                    <span class="text-info mt-1"> Call </span>
                                </div>
                            </a>
                            <a :href="`sms:${phones[0]}`" target="_blank" class="decoration-none">
                                <div class="d-flex flex-column justify-center align-center ml-10">
                                    <v-btn variant="tonal" icon color="info">
                                        <v-icon> mdi-message </v-icon>
                                    </v-btn>
                                    <span class="text-info mt-1"> Message </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div v-if="dialogs.address">
                        <strong class="text-info">
                            {{ addressFormatter(address) }}
                        </strong>
                        <div class="mt-3" style="height: 300px">
                            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0"
                                marginwidth="0" :src="`https://maps.google.com/maps?output=embed&q=${mapAddress}`" />
                        </div>
                    </div>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
    <v-btn v-if="showButton" rounded :variant="variant || 'flat'" :color="props.color || 'primary'" class="text-none"
        @click="applyJob()">
        Apply Now
    </v-btn>
</template>

<style scoped lang="scss">
.decoration-none {
    text-decoration: none;
}
</style>
