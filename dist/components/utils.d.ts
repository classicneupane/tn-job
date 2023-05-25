import { Business } from "../types";
declare function addressFormatter({ street, state, zip, town, }: {
    street?: string;
    state?: string;
    zip?: string;
    town?: string;
}): string;
declare function getPhoneNumbers(business: Business, options?: {
    job: boolean;
    business: boolean;
}): Array<string>;
export { addressFormatter, getPhoneNumbers };
