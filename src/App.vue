<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="job in jobs" :key="job.id" cols="12" md="6" lg="4">
            <JobCard :id="job.id" :job="job.data" :business="job.business?.data" :job-features="jobFeatures"></JobCard>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang=ts>
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

import { BusinessFirebaesDocument, JobFirebaseDocument } from './types';
import { jobFeatures } from './job'
import { onMounted, ref } from 'vue';
import moment from 'moment'

// import JobCard from './components/JobCard.vue'
import {JobCard} from '../dist/index.es'
import '../dist/style.css'

const firebaseConfig = {
  authDomain: 'freelancer-brian-b.firebaseapp.com',
  databaseURL: 'https://freelancer-brian-b-default-rtdb.firebaseio.com',
  projectId: 'freelancer-brian-b',
  storageBucket: 'freelancer-brian-b.appspot.com',
  messagingSenderId: '149556519970',
  appId: '1:149556519970:web:18c6bc034bd61c9049167b',
  measurementId: 'G-WQ943MB4FW',
}


function parseDate(date: any) {
  if (typeof date === 'object' && date?.seconds) {
    return moment.unix(date?.seconds).toDate();
  } else if (typeof date === 'string') {
    return moment(date).toDate();
  }
  return date;
}

function firebaseDataFormatter(data: any) {
  const jobData = { ...data };
  try {
    jobData.createdAt = jobData.createdAt.toDate();
  } catch {
    jobData.createdAt = parseDate(jobData.createdAt);
  }

  try {
    jobData.updatedAt = jobData.updatedAt.toDate();
  } catch {
    jobData.updatedAt = parseDate(jobData.updatedAt);
  }

  jobData.date = jobData.date || jobData.createdAt;
  return jobData;
}

function firebaseDocFormatter(doc: any): JobFirebaseDocument {
  const jobData = doc.data() as any;
  return {
    id: doc.id,
    data: firebaseDataFormatter(jobData),
  } as JobFirebaseDocument;
}


const app = initializeApp(firebaseConfig);

const fstore = getFirestore(app);
const refJobs = collection(fstore, 'truro_biz_jobs')
const refBusiness = collection(fstore, 'truro_biz_business')

const jobs = ref([] as JobFirebaseDocument[])

onMounted(() => {
  fetchJobs()
})

async function fetchJobs() {
  const bizQ = await getDocs(refBusiness)

  const bizs = [] as BusinessFirebaesDocument[]
  bizQ.forEach(i => {
    bizs.push(firebaseDocFormatter(i) as any)
  });

  const jobQ = await getDocs(refJobs)
  const data = [] as any

  jobQ.forEach(i => {
    const jobData = { ...firebaseDocFormatter(i) } as JobFirebaseDocument
    jobData.business = bizs.filter(b => b.id === jobData.data.businessId)[0]
    data.push(jobData);
    jobs.value = data;

    jobs.value = jobs.value.filter(job => {
      const j = jobData as any;
      const isDeleted = !j.business || j.business?.data?.isDeleted;
      if (isDeleted || job.data.thisJobCount <= 0) {
        return false
      }
      return true
    })
  })
}
</script>

<style>
.job-business-name{
  cursor: pointer;
}
</style>