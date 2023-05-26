<script setup lang="ts">
import { onMounted, ref, } from 'vue';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore'
import { Business } from '../types'
import JobCard from '../components/JobCard.vue';

const props = defineProps<{
    id: string
}>()

const BUSINESS_ID = props.id

const jobsData = ref([] as any[])
const businessData = ref({} as any)
const loading = ref(true)

const app = initializeApp({
    authDomain: 'property-analysis-29b2f.firebaseapp.com',
    databaseURL: 'https://property-analysis-29b2f-default-rtdb.firebaseio.com',
    projectId: 'property-analysis-29b2f',
    storageBucket: 'property-analysis-29b2f.appspot.com',
    messagingSenderId: '482032857621',
    appId: '1:482032857621:web:dece6b892abaa70114d41c',
    measurementId: 'G-96NEN8H1XZ',
})

const firestore = getFirestore(app);
const dbBusiness = collection(firestore, 'truro_biz_business')
const dbJob = collection(firestore, 'truro_biz_jobs')

async function getBusiness(id: string) {
    const res = await getDoc(doc(dbBusiness, id))
    return res.data() as Business
}

async function getJobs(id: string) {
    const res = await getDocs(query(dbJob, where('businessId', '==', id)))
    const data = [] as any[];
    res.forEach(i => {
        data.push({
            id: i.id,
            data: i.data()
        })
    });
    return data;
}

function jobProps(j: any): any {
  return {
    id: j.id,
    job: j.data,
    business: businessData.value,
  }
}

onMounted(() => {
    getBusiness(BUSINESS_ID).then((res) => {
        businessData.value = res;
        getJobs(BUSINESS_ID).then(res => {
            jobsData.value = res
        }).finally(() => {
            loading.value = false;
        })
    })
})

</script>

<template>
    <v-app>
        <div class="tb-jobs-wrapper">
            <div v-if="loading" class="job-loading">
                Loading...
            </div>
            <div class="v-row" v-else>
                <div class="job-col v-col-md-6 v-col-lg-4 v-col-12" v-for="job in jobsData" :key="job.id">
                    <JobCard v-bind="jobProps(job)" />
                </div>
            </div>
        </div>
    </v-app>
</template>
