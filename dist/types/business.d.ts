import { Contact } from './contact';
export type Opens = 'yearRound' | 'seasonal';
export type LogoTheme = '' | 'dark' | 'light';
export type BusinessStatus = 'none' | 'pending' | 'completed' | 'noJobs';
export type Logo = {
    imageId: string;
    thumbnail: string;
    full: string;
    theme: LogoTheme;
};
export interface Coordinates {
    lng: number;
    lat: number;
}
export interface BusinessMetadata {
    totalJobs: number;
    openJobs: number;
    moreThanOneJobs: boolean;
}
export type Role = 'updateBusiness' | 'createJob' | 'updateJob' | 'owner';
export interface PermissionObject {
    email: string;
    permissions: Array<Role>;
}
export type PermissionData = Array<PermissionObject>;
export interface UserRole {
    updateBusiness: boolean;
    deleteBusiness: boolean;
    createJob: boolean;
    updateJob: boolean;
    deleteJob: boolean;
    owner: boolean;
    any: boolean;
}
export interface Permission {
    updateBusiness: string[];
    deleteBusiness: string[];
    createJob: string[];
    updateJob: string[];
    deleteJob: string[];
    owner: string[];
}
export interface Address {
    street: string;
    town: string;
    zip: string;
    coordinates: string;
    state: string;
    lngLat: Coordinates;
}
export interface Business {
    isDeleted: boolean;
    street: string;
    town: string;
    zip: string;
    coordinates: string;
    state: string;
    lngLat: Coordinates;
    townAddress: string;
    name: string;
    alias: string;
    legalName: string;
    website: string;
    email: string;
    phone: string;
    phoneFormatted: string;
    address: string;
    contact: Contact;
    mailingAddress: Address;
    isHomeBased: boolean;
    yearStarted: boolean;
    sqFt: number;
    estRevenue: number;
    rooms: number;
    seats: number;
    category: string;
    isSeasonal: boolean;
    naicsCode: string;
    logo: Logo | Logo[];
    initials: string;
    reviewsUrl: string;
    showReviewIcon: boolean;
    monthsOpen: Array<string>;
    employeesYearRound: number;
    employeesSeasonal: number;
    isChamberMember: boolean;
    abc: string;
    comments: string;
    more: string;
    opens: Opens;
    hours: string;
    currentStatus: 'open' | 'close';
    openDate: string;
    openDateApproximate: boolean;
    closeDate: string;
    closeDateApproximate: boolean;
    petFriendly: boolean;
    petPolicy: string;
    adminEmail: string;
    adminEmailSecondary: string;
    status: BusinessStatus;
    statusDate: string;
    statusNotes: string;
    keywords: string;
    jobsContact: Contact;
    yelp?: BusinessYelp;
    activity: {
        latestActivityDate: string;
        activityCount: number;
    };
    createdAt: Date;
    updatedAt: Date;
    metadata?: BusinessMetadata;
    user?: string;
    permissionData: PermissionData;
    permission: Permission;
    openJobs: number[];
    unpostedJobNotes: string;
    missingJCD: boolean;
}
export interface BusinessFirebaseDocument {
    id: string;
    data: Business;
}
export interface BusinessYelp {
    id: string;
    alias: string;
    name: string;
    image_url: string;
    is_claimed: boolean;
    is_closed: boolean;
    url: string;
    phone: string;
    display_phone: string;
    review_count: number;
    categories: Array<{
        alias: string;
        title: string;
    }>;
    rating: number;
    location: {
        address1: string;
        address2: string;
        city: string;
        zip_code: string;
        country: string;
        state: string;
    };
    coordinates: {
        latitude: number;
        longitude: number;
    };
    photos: Array<string>;
    price: string;
    hours: Array<{
        open: Array<{
            is_overnight: boolean;
            start: string;
            end: string;
            day: number;
        }>;
        hours_type: string;
    }>;
    distance?: number;
}
export interface BusinessFirebaesDocument {
    id: string;
    data: Business;
}
export interface ActivitySetting {
    showBy: boolean;
    showFullNotes: boolean;
}
export type BusinessFilterViewModes = 'list' | 'card';
export interface BusinessFilter {
    showFilter: boolean;
    search: boolean;
    query: string;
    viewMode: BusinessFilterViewModes;
    showJobs: boolean;
    showZeroJobs: boolean;
    category: string;
    jobType: string;
    businessAdmin: string;
    town: string;
    petFriendly: boolean;
}
