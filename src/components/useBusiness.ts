import { Business, Logo } from "../types";

interface BusinessLogo {
    light: Logo;
    dark: Logo;
}

export function useBusiness() {


    function businessLogos(business: Business) {
        const res = [] as Logo[];
        if (business) {
            if (Array.isArray(business.logo)) {
                res.push(...business.logo);
            } else if (business.logo?.full) {
                res.push(business.logo);
            }
        }
        return res;
    }

    function getLogo(business: Business): BusinessLogo {
        const logos = businessLogos(business);
        const res = {} as BusinessLogo;

        logos.forEach(logo => {
            if (!logo.theme) {
                if (!res.light) {
                    res.light = logo;
                }
                if (!res.dark) {
                    res.dark = logo;
                }
            } else if (logo.theme === 'dark') {
                if (!res.dark) {
                    res.dark = logo;
                }
            } else if (logo.theme === 'light') {
                if (!res.light) {
                    res.light = logo;
                }
            }
        });

        return res;
    }

    function businessLogo(business: Business, theme: string) {
        const data = getLogo(business);
        return data[theme as keyof typeof data]?.full;
    }

    return {
        businessLogo
    }
}