/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import { isValid } from '../utils/mod97And10';

const check = (input: string): CheckResult<{}> => {
    // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
    // http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
    const ibanPatterns = {
        AD: 'AD[0-9]{10}[A-Z0-9]{12}',                      // Andorra
        AE: 'AE[0-9]{21}',                                  // United Arab Emirates
        AL: 'AL[0-9]{10}[A-Z0-9]{16}',                      // Albania
        AO: 'AO[0-9]{23}',                                  // Angola
        AT: 'AT[0-9]{18}',                                  // Austria
        AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',               // Azerbaijan
        BA: 'BA[0-9]{18}',                                  // Bosnia and Herzegovina
        BE: 'BE[0-9]{14}',                                  // Belgium
        BF: 'BF[0-9]{25}',                                  // Burkina Faso
        BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{6}[A-Z0-9]{8}',        // Bulgaria
        BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',               // Bahrain
        BI: 'BI[0-9]{14}',                                  // Burundi
        BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',                  // Benin
        BR: 'BR[0-9]{25}[A-Z][A-Z0-9]',                     // Brazil
        CH: 'CH[0-9]{7}[A-Z0-9]{12}',                       // Switzerland
        CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',                  // Ivory Coast
        CM: 'CM[0-9]{25}',                                  // Cameroon
        CR: 'CR[0-9]{20}',                                  // Costa Rica
        CV: 'CV[0-9]{23}',                                  // Cape Verde
        CY: 'CY[0-9]{10}[A-Z0-9]{16}',                      // Cyprus
        CZ: 'CZ[0-9]{22}',                                  // Czech Republic
        DE: 'DE[0-9]{20}',                                  // Germany
        DK: 'DK[0-9]{16}',                                  // Denmark
        DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',               // Dominican Republic
        DZ: 'DZ[0-9]{22}',                                  // Algeria
        EE: 'EE[0-9]{18}',                                  // Estonia
        ES: 'ES[0-9]{22}',                                  // Spain
        FI: 'FI[0-9]{16}',                                  // Finland
        FO: 'FO[0-9]{16}',                                  // Faroe Islands
        FR: 'FR[0-9]{12}[A-Z0-9]{11}[0-9]{2}',              // France
        GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{14}',                  // United Kingdom
        GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',                  // Georgia
        GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',               // Gibraltar
        GL: 'GL[0-9]{16}',                                  // Greenland
        GR: 'GR[0-9]{9}[A-Z0-9]{16}',                       // Greece
        GT: 'GT[0-9]{2}[A-Z0-9]{24}',                       // Guatemala
        HR: 'HR[0-9]{19}',                                  // Croatia
        HU: 'HU[0-9]{26}',                                  // Hungary
        IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{14}',                  // Ireland
        IL: 'IL[0-9]{21}',                                  // Israel
        IR: 'IR[0-9]{23}',                                  // Iran
        IS: 'IS[0-9]{24}',                                  // Iceland
        IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{10}[A-Z0-9]{12}',      // Italy
        JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}', // Jordan
        KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',                  // Kuwait
        KZ: 'KZ[0-9]{5}[A-Z0-9]{13}',                       // Kazakhstan
        LB: 'LB[0-9]{6}[A-Z0-9]{20}',                       // Lebanon
        LI: 'LI[0-9]{7}[A-Z0-9]{12}',                       // Liechtenstein
        LT: 'LT[0-9]{18}',                                  // Lithuania
        LU: 'LU[0-9]{5}[A-Z0-9]{13}',                       // Luxembourg
        LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',               // Latvia
        MC: 'MC[0-9]{12}[A-Z0-9]{11}[0-9]{2}',              // Monaco
        MD: 'MD[0-9]{2}[A-Z0-9]{20}',                       // Moldova
        ME: 'ME[0-9]{20}',                                  // Montenegro
        MG: 'MG[0-9]{25}',                                  // Madagascar
        MK: 'MK[0-9]{5}[A-Z0-9]{10}[0-9]{2}',               // Macedonia
        ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',                  // Mali
        MR: 'MR[0-9]{25}',                                  // Mauritania
        MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',       // Malta
        MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{19}[A-Z]{3}',          // Mauritius
        MZ: 'MZ[0-9]{23}',                                  // Mozambique
        NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',                  // Netherlands
        NO: 'NO[0-9]{13}',                                  // Norway
        PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',               // Pakistan
        PL: 'PL[0-9]{26}',                                  // Poland
        PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',               // Palestinian
        PT: 'PT[0-9]{23}',                                  // Portugal
        QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',               // Qatar
        RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',               // Romania
        RS: 'RS[0-9]{20}',                                  // Serbia
        SA: 'SA[0-9]{4}[A-Z0-9]{18}',                       // Saudi Arabia
        SE: 'SE[0-9]{22}',                                  // Sweden
        SI: 'SI[0-9]{17}',                                  // Slovenia
        SK: 'SK[0-9]{22}',                                  // Slovakia
        SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{10}[A-Z0-9]{12}',      // San Marino
        SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',                  // Senegal
        TL: 'TL[0-9]{21}',                                  // East Timor
        TN: 'TN[0-9]{22}',                                  // Tunisia
        TR: 'TR[0-9]{7}[A-Z0-9]{17}',                       // Turkey
        VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',                  // Virgin Islands, British
        XK: 'XK[0-9]{18}',                                  // Republic of Kosovo
    };

    const value = input.replace(/\s/g, '');
    const country = value.substr(0, 2);
    if (!ibanPatterns[country]) {
        return { valid: false };
    }

    return {
        valid: isValid(`${value.substr(4)}${value.substr(0, 4)}`),
    };
};

export default check;
