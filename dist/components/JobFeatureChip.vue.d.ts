import type { PropType as __PropType } from 'vue';
import { JobFeature } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    feature: {
        type: __PropType<JobFeature>;
        required: true;
    };
    selected: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    feature: {
        type: __PropType<JobFeature>;
        required: true;
    };
    selected: {
        type: __PropType<boolean | undefined>;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>;
export default _sfc_main;
