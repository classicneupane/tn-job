import { JobFeature } from "../types";

export const groups = ['compensation', 'schedule', 'experience', 'benefits'];

export const jobFeatures = [
  {
    id: 'quotedPay',
    label: '*SHOW PAY*',
    color: '#2E7D32',
    textColor: 'white',
    group: 'compensation',
  },

  {
    id: 'competitivePay',
    label: 'Competitive Pay',
    color: '#2E7D32',
    textColor: '#ff0000',
    group: 'compensation',
  },

  {
    id: 'Hourly',
    label: 'Hourly',
    color: '#2E7D32',
    textColor: '#ff0000',
    group: 'compensation',
  },

  {
    id: 'tips',
    label: 'Tips',
    color: '#2E7D32',
    textColor: '#ff0000',
    group: 'compensation',
  },

  {
    id: 'salaried',
    label: 'Salaried',
    color: '#2E7D32',
    textColor: '#ff0000',
    group: 'compensation',
  },

  {
    id: 'signupBonus',
    label: 'Signup Bonus',
    color: '#2E7D32',
    textColor: '#ff0000',
    group: 'compensation',
  },

  {
    id: 'bonus',
    label: 'Bonus pay',
    color: '#43A047',
    textColor: 'white',
    group: 'compensation',
  },
  {
    id: 'bonuses',
    label: 'Bonuses',
    color: '#43A047',
    textColor: 'white',
    group: 'compensation',
  },
  {
    id: 'partTime',
    label: 'Part Time',
    color: '#64B5F6',
    textColor: 'black',
    group: 'schedule',
  },
  {
    id: 'partOrFullTime',
    label: 'Part or Full Time',
    color: '#64B5F6',
    textColor: 'black',
    group: 'schedule',
  },
  {
    id: 'fullTime',
    label: 'Full Time',
    color: '#64B5F6',
    textColor: 'black',
    group: 'schedule',
  },
  {
    id: 'temporary',
    label: 'Temporary',
    color: '#64B5F6',
    textColor: 'black',
    group: 'schedule',
  },
  {
    id: 'seasonal',
    label: 'Seasonal',
    color: '#64B5F6',
    textColor: 'black',
    group: 'schedule',
  },
  {
    id: 'yearRound',
    label: 'Year-Round',
    color: '#64B5F6',
    textColor: 'black',
    group: 'schedule',
  },
  {
    id: 'flexibleSchedule',
    label: 'Flexible Schedule',
    color: '#42A5F5',
    textColor: 'black',
    group: 'schedule',
  },
  {
    id: 'weekends',
    label: 'Weekends',
    color: '#3F51B5',
    textColor: 'white',
    group: 'schedule',
  },
  {
    id: 'dayShift',
    label: 'Day Shift',
    color: '#3F51B5',
    textColor: 'white',
    group: 'schedule',
  },
  {
    id: 'overnightShift',
    label: 'Overnight Shift',
    color: '#3F51B5',
    textColor: 'white',
    group: 'schedule',
  },
  {
    id: 'onCall',
    label: 'On Call',
    color: '#3F51B5',
    textColor: 'white',
    group: 'schedule',
  },
  {
    id: 'urgentlyHiring',
    label: 'Urgently Hiring',
    color: 'red',
    textColor: 'white',
    group: 'schedule',
  },

  {
    id: 'noExperience',
    label: 'No Experience',
    color: 'orange',
    textColor: 'black',
    group: 'experience',
  },
  {
    id: 'willTrain',
    label: 'Will Train',
    color: 'orange',
    textColor: 'black',
    group: 'experience',
  },
  {
    id: 'entryLevel',
    label: 'Entry Level',
    color: 'orange',
    textColor: 'black',
    group: 'experience',
  },
  {
    id: 'experience1-3',
    label: '1-3 Years of Experience',
    color: 'orange',
    textColor: 'black',
    group: 'experience',
  },
  {
    id: 'experience4+',
    label: '4+ Years of Experience',
    color: 'orange',
    textColor: 'black',
    group: 'experience',
  },
  {
    id: 'experienceAny',
    label: 'Any Experience Welcomed ',
    color: 'orange',
    textColor: 'black',
    group: 'experience',
  },
  {
    id: 'experiencePreferred',
    label: 'Experience Preferred',
    color: 'orange',
    textColor: 'black',
    group: 'experience',
  },
  {
    id: 'experienceRequired',
    label: 'Experience Required',
    color: 'orange',
    textColor: 'black',
    group: 'experience',
  },
  {
    id: 'busRoute',
    label: 'Bus Route',
    color: 'purple',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'workFromHome',
    label: 'Work from Home',
    color: 'purple',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'employeeDiscounts',
    label: 'Employee Discounts',
    color: 'cyan',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'benefits',
    label: 'Benefits',
    color: 'cyan',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'heathInsurance',
    label: 'Health Insurance',
    color: 'cyan',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'paidTimeOff',
    label: 'Paid Time Off',
    color: '#00ACC1',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'retirementBenefit',
    label: 'Retirement Benefit',
    color: '#0097A7',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'childCare',
    label: 'Child Care',
    color: '#C0CA33',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'fuelCosts',
    label: 'Fuel Costs',
    color: '#C0CA33',
    textColor: 'white',
    group: 'benefits',
  },
  {
    id: 'housing',
    label: 'Housing',
    color: '#C0CA33',
    textColor: 'white',
    group: 'benefits',
  },
] as JobFeature[];
