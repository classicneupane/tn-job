import { Business } from "../types";

function addressFormatter({
    street,
    state,
    zip,
    town,
}: {
    street?: string;
    state?: string;
    zip?: string;
    town?: string;
}) {
    let res = ``;
    if (street) {
        res += street;
    }
    if (town?.trim()) {
        if (res) {
            res += ', ';
        }
        res += town.trim();
    }
    if (state?.trim() || zip?.trim()) {
        if (res && (state?.trim() || zip?.trim())) {
            res += ',';
        }
        if (state?.trim()) {
            if (res) {
                res += ' ';
            }
            res += state?.trim();
        }
        if (zip?.trim()) {
            if (res) {
                res += ' ';
            }
            res += zip.trim();
        }
    }
    return res;
}

function getPhoneNumbers(business: Business, options?: { job: boolean; business: boolean }): Array<string> {
    const opts = options || ({ job: true, business: true } as any);
    const data = [] as string[];
    if (opts?.job) {
        if (Array.isArray(business?.jobsContact?.phone)) {
            business.jobsContact.phone.forEach(phone => {
                data.push(phone.numberFormatted);
            });
        }
    }
    if (opts?.business) {
        if (business?.phoneFormatted) {
            data.push(business.phoneFormatted);
        }
    }
    return data.filter(i => !!i);
}

export { addressFormatter , getPhoneNumbers};
