import type { PropType as __PropType } from 'vue';
import { EmbedJobConfig, Job, JobFeature, UserRole } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: __PropType<string>;
        required: true;
    };
    job: {
        type: __PropType<Job>;
        required: true;
    };
    jobFeatures: {
        type: __PropType<JobFeature[]>;
        required: true;
    };
    jobNewDays: {
        type: __PropType<number | undefined>;
        required: false;
    };
    permissions: {
        type: __PropType<UserRole | undefined>;
        required: false;
    };
    business: {
        type: __PropType<any>;
        required: false;
    };
    fetchBusinessFirestore: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    hideEdit: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    hideOutline: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    disableLearnMore: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    disableApply: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    config: {
        type: __PropType<EmbedJobConfig | undefined>;
        required: false;
    };
    href: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    theme: {
        type: __PropType<"light" | "dark" | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click:business" | "click:learn-more")[], "click:business" | "click:learn-more", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: __PropType<string>;
        required: true;
    };
    job: {
        type: __PropType<Job>;
        required: true;
    };
    jobFeatures: {
        type: __PropType<JobFeature[]>;
        required: true;
    };
    jobNewDays: {
        type: __PropType<number | undefined>;
        required: false;
    };
    permissions: {
        type: __PropType<UserRole | undefined>;
        required: false;
    };
    business: {
        type: __PropType<any>;
        required: false;
    };
    fetchBusinessFirestore: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    hideEdit: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    hideOutline: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    disableLearnMore: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    disableApply: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    config: {
        type: __PropType<EmbedJobConfig | undefined>;
        required: false;
    };
    href: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
    theme: {
        type: __PropType<"light" | "dark" | undefined>;
        required: false;
    };
}>> & {
    "onClick:business"?: ((...args: any[]) => any) | undefined;
    "onClick:learn-more"?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
