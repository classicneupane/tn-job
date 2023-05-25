import {BusinessFirebaseDocument} from './business'

export type WorkSeason = 'months' | 'dateRange';
export type RateType = 'range' | 'exactAmount' | 'startingAmount' | 'maximumAmount';
export type RatePeriod = 'HR' | 'DY' | 'WK' | 'MO' | 'YR';
export type JobStatus = 'draft' | 'open' | 'closed';
export type Remote = 'yes' | 'no' | 'hybrid';

export interface Wage {
  rateLow: number;
  rateHigh: number;
  rateAmount: number;
  ratePeriod: RatePeriod | null;
  rateType: RateType;
  rateUpTo: boolean;
  showPlus: boolean;
}

export interface Job {
  title: string;
  subtitle: string;
  businessId: string;
  town: string;
  features: Array<JobFeature>;
  date: Date;

  rateType: RateType;
  ratePeriod: RatePeriod | null;
  rateRange: boolean;
  rateLow: number;
  rateHigh: number;
  rateAmount: number;
  rateUpTo: boolean;
  showPlus: boolean;
  displayWage: string;
  isSeasonal: boolean;
  isRemote: Remote;
  workSeason: WorkSeason;
  monthsWorked: Array<string>;
  dateStart: string;
  dateEnd: string;
  hours: number;
  comments: string;
  status: JobStatus;
  keywords: string;

  createdAt: Date;
  updatedAt: Date;
  description: string;
  descriptionLong: string;
  descriptionMode: 'description' | 'descriptionLong';
  seasonalPeriod: string;

  thisJobCount: number;
  moreThanOne: boolean;
  userId: string;
  userEmail: string;
}

export interface JobFeature {
  id: string;
  label: string;
  color: string;
  textColor: string;
  editable: boolean;
  value: string;
  sortKey: string;
  group: string;
}

export interface JobFirebaseDocument {
  id: string;
  data: Job;
  business?: BusinessFirebaseDocument;
}

export interface JobCount {
  total: number;
  open: number;
  moreThanOne: boolean;
}

export interface JobFilter {
  search: boolean;
  query: string;
  showBusiness: boolean;
  businesses: string[];
  showFilter: boolean;

  partTime: boolean;
  fullTime: boolean;
  yearRound: boolean;
  seasonal: boolean;
  new: boolean;
}

export interface ChatActivity {
  timestamp: Date;
  type: 'request' | 'response';
  data: any;
}

export interface EmbedJobConfig {
  showBizName: boolean;
  showBizAddress: boolean;
  showLogo: boolean;
  showSubtitle: boolean;
  subtitlePosition: 'belowJobTitle' | 'aboveLearnMore';
}
