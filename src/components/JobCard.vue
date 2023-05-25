<script setup lang="ts">
import { Business, EmbedJobConfig, Job, JobFeature, UserRole } from '../types';
import { ref, computed } from 'vue'
import moment from 'moment'

import JobFeatureChip from './JobFeatureChip.vue'
import ButtonJobApply from './ButtonJobApply.vue';
import { useBusiness } from './useBusiness';
import { addressFormatter } from './utils'

const props = defineProps<{
  id: string;
  job: Job;
  jobFeatures: JobFeature[]
  jobNewDays?: number
  permissions?: UserRole
  business?: Business | any
  fetchBusinessFirestore?: boolean
  hideEdit?: boolean
  hideOutline?: boolean
  disableLearnMore?: boolean
  disableApply?: boolean
  config?: EmbedJobConfig
  href?: boolean
  theme?: 'light' | 'dark'
}>();

const emit = defineEmits(['click:business', 'click:learn-more']);

const { businessLogo } = useBusiness();

const showAllFeatures = ref(true);

const business = ref(props.business || ({} as Business));

const configComputed = computed(() => {
  return {
    showBizAddress: true,
    showBizName: true,
    showLogo: true,
    showSubtitle: true,
    subtitlePosition: 'belowJobTitle',
    ...(props.config || {}),
  } as EmbedJobConfig;
});

const themeComputed = computed(() => {
  return props.theme || 'light'
})

const jobNewDaysComputed = computed(() => {
  return props.jobNewDays || 30
})


// const jobFeaturesComputed = computed(() => {
//     if (props?.job?.features && Array.isArray(props?.job?.features)) {
//         if (showAllFeatures.value) {
//             return props.job.features;
//         } else {
//             return props.job.features.slice(0, 4);
//         }
//     } else {
//         return [];
//     }
// });

const jobFeaturesComputed = computed(() => {
  let selected = [] as JobFeature[];
  const features = [] as JobFeature[];

  if (props?.job?.features && Array.isArray(props?.job?.features)) {
    if (showAllFeatures.value) {
      selected = props.job.features;
    } else {
      selected = props.job.features.slice(0, 4);
    }
  } else {
    selected = [];
  }

  const getSelectedFeature = (id: string): JobFeature => {
    return selected.filter(i => i.id === id)[0];
  };

  props.jobFeatures.forEach((ft: JobFeature) => {
    const selectedFeature = getSelectedFeature(ft.id);
    if (selectedFeature) {
      if (ft.id === 'quotedPay') {
        if (selectedFeature.label !== ft.label) {
          features.push(selectedFeature);
        }
      } else {
        features.push(ft);
      }
    }
  });

  return features;
});

const showLearnMore = computed(() => {
  return (
    props.job?.features?.length ||
    props.job.isRemote ||
    props.job.rateAmount ||
    (props.job.rateLow && props.job.rateHigh) ||
    props.job.isSeasonal !== undefined ||
    props.job.monthsWorked ||
    props.job.description ||
    props.job.comments
  );
});

function postedDays() {
  return moment.duration(moment().diff(props.job.date)).asDays();
}

function postedFromNow() {
  return moment(props.job.date).fromNow();
}

function format(date: Date, fmt: string) {
  return moment(date).format(fmt);
}

function showBusiness() {
  emit('click:business', props.job.businessId);
}

function getInitials(business: Business) {
  if (business.initials) {
    return business.initials;
  }
  const { name } = business;
  try {
    return name
      .replace(/(?:^|\s)(a|an|the|and|&|\/|,)\s/gi, '')
      .match(/\b\w/g)
      ?.slice(0, 3)
      ?.join('')
      ?.toUpperCase();
  } catch (e) {
    console.warn(e);
    return '';
  }
}

const linkJobDetail = computed(() => {
  if (props.disableLearnMore) {
    return '';
  }
  //needs detail url formatter or props
  return `/jobs/${props.id}`;
});

function onClickLearnMore(){
  if(props.disableLearnMore){
    return
  }
  if(props.href){
    window.open(linkJobDetail.value, '_blank')
  }
  emit('click:learn-more', props.id)
}

</script>

<template>
  <div class="b-container" :class="`b-${themeComputed} ${hideOutline ? 'no-border' : ''}`">
    <div class="d-flex align-start w-100">
      <div>
        <!-- <div v-if="postedDays() < newPostingDays" class="ma-2 w-100">
                                                                        <v-chip size="small" color="warning">
                                                                            New
                                                                        </v-chip>
                                                                        <small class="ml-2">
                                                                            <span class="text-grey font-weight-light">Posted {{ postedFromNow() }}</span>
                                                                        </small>
                                                                    </div> -->
        <div class="w-100">
          <div class="d-flex align-start w-100">
            <div v-if="configComputed.showLogo" class="mx-3 d-flex justify-center cursor-pointer" @click="showBusiness">
              <v-img v-if="businessLogo(business, themeComputed)" :src="businessLogo(business, themeComputed)"
                :alt="business?.name" width="80" />
              <v-sheet v-else-if="getInitials(business)" width="80">
                <v-avatar variant="tonal" size="60">
                  <span class="white--text text-h5">{{ getInitials(business) }}</span>
                </v-avatar>
              </v-sheet>
            </div>
            <div :class="configComputed.showLogo ? '' : 'ml-3'">
              <div class="text-h6 font-weight-bold">
                {{ job.title }}
                <v-chip v-if="postedDays() < jobNewDaysComputed" size="small" color="warning"> New </v-chip>
              </div>
              <div v-if="configComputed.showSubtitle && configComputed.subtitlePosition === 'belowJobTitle'"
                class="text-subtitle-1 mt-n1">
                {{ job.subtitle }}
              </div>
              <slot name="address" :job="job" :business="business">
                <div class="text-body-2 mt-1">
                  <div v-if="configComputed.showBizName" class="text-info job-business-name" @click="showBusiness">
                    {{ business.name }}
                  </div>
                  <div v-if="configComputed.showBizAddress">
                    <span v-if="job.isRemote === 'yes'"> Remote </span>
                    <span v-else>
                      {{
                        addressFormatter({
                          street: business.street,
                          town: business.town,
                        })
                      }}
                    </span>
                  </div>
                </div>
              </slot>
            </div>
          </div>
          <div class="mt-3">
            <JobFeatureChip v-for="feature in jobFeaturesComputed" :key="feature.id" :feature="feature" class="mx-1" />
            <span v-if="job?.features?.length > 4">
              <v-btn v-if="!showAllFeatures" color="info" variant="tonal" icon size="x-small"
                @click="showAllFeatures = true">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </span>
          </div>
        </div>
      </div>
      <v-spacer />
      <div v-if="props.permissions?.updateJob && !hideEdit">
        <div>
          <v-btn variant="text" icon size="small" :to="`/jobs/${id}/edit`">
            <v-icon> mdi-pencil </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div>
      <div v-if="configComputed.showSubtitle && configComputed.subtitlePosition === 'aboveLearnMore'"
        class="text-subtitle-1 my-2">
        {{ job.subtitle }}
      </div>
    </div>
    <div class="d-flex flex-wrap align-end mt-2">
      <div class="text-grey-lighten-1 text-caption">
        Posted<br />
        {{ postedFromNow() }}
      </div>
      <slot name="action">
        <v-spacer />
        <div class="d-flex justify-center">
          <ButtonJobApply :disable-apply="disableApply" variant="outlined" :business="business" :job="job" />
          <div v-if="showLearnMore">
            <v-btn rounded variant="outlined" color="primary" class="text-none ml-1"
              @click="onClickLearnMore">
              <span> Learn More</span>
            </v-btn>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './colors.scss';

.b-container {
  min-height: 100px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid;
}

.b-light {
  border-color: $color-primary-light-1;

  &:hover {
    border-color: $color-primary;
    background-color: $color-primary-light-4 !important;
  }
}

.no-border {
  border: 1px solid transparent !important;
}

.b-dark {
  border-color: #212121;

  &:hover {
    background-color: #212121 !important;
  }
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.h-100 {
  height: 100%;
}

.w-100 {
  width: 100%;
}

.img-container {
  width: 100px;
}
</style>
