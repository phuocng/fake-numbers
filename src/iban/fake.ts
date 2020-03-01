/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { UpperCaseDigits, UpperCaseLetters } from '../CharSet';
import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';
import randomString from '../utils/randomString';
import { getCheckDigits } from '../utils/mod97And10';

/**
 * Generate a random IBAN
 *
 * @returns string
 */
const fake = (countryCode?: string): string => {
    const supportedCountries = [
        'AD', 'AE', 'AL', 'AO', 'AT', 'AZ',
        'BA', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BR',
        'CH', 'CI', 'CM', 'CR', 'CV', 'CY', 'CZ',
        'DE', 'DK', 'DO', 'DZ',
        'EE', 'ES',
        'FI', 'FO', 'FR',
        'GB', 'GE', 'GI', 'GL', 'GR', 'GT',
        'HR', 'HU',
        'IE', 'IL', 'IR', 'IS', 'IT',
        'JO',
        'KW', 'KZ',
        'LB', 'LI', 'LT', 'LU', 'LV',
        'MC', 'MD', 'ME', 'MG', 'MK', 'ML', 'MR', 'MT', 'MU', 'MZ',
        'NL', 'NO',
        'PK', 'PL', 'PS', 'PT',
        'QA',
        'RO', 'RS',
        'SA', 'SE', 'SI', 'SK', 'SM', 'SN',
        'TL', 'TN', 'TR',
        'VG',
        'XK',
    ];

    const country = countryCode || randomFromArray(supportedCountries);
    if (supportedCountries.indexOf(country) === -1) {
        throw new Error(`The ${country} isn't supported`);
    }

    let partial;
    switch (country) {
        case 'AD':  // Andorra
            partial = `AD${randomNumbers(10).join('')}${randomString(12, UpperCaseDigits)}`;
            break;
        case 'AE':  // United Arab Emirates
            partial = `AE${randomNumbers(21).join('')}`;
            break;
        case 'AL':  // Albania
            partial = `AL${randomNumbers(10).join('')}${randomString(16, UpperCaseDigits)}`;
            break;
        case 'AO':  // Angola
            partial = `AO${randomNumbers(23).join('')}`;
            break;
        case 'AT':  // Austria
            partial = `AT${randomNumbers(18).join('')}`;
            break;
        case 'AZ':  // Azerbaijan
            partial = `AZ${randomNumbers(6).join('')}${randomString(20, UpperCaseDigits)}`;
            break;
        case 'BA':  // Bosnia and Herzegovina
            partial = `BA${randomNumbers(18).join('')}`;
            break;
        case 'BE':  // Belgium
            partial = `BE${randomNumbers(14).join('')}`;
            break;
        case 'BF':  // Burkina Faso
            partial = `BF${randomNumbers(25).join('')}`;
            break;
        case 'BG':  // Bulgaria
            partial = `BG${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(6).join('')}${randomString(8, UpperCaseDigits)}`;
            break;
        case 'BH':  // Bahrain
            partial = `BH${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomString(14, UpperCaseDigits)}`;
            break;
        case 'BI':  // Burundi
            partial = `BI${randomNumbers(14).join('')}`;
            break;
        case 'BJ':  // Benin
            partial = `BJ${randomNumbers(2).join('')}${randomString(1, UpperCaseLetters)}${randomNumbers(23).join('')}`;
            break;
        case 'BR':  // Brazil
            partial = `BR${randomNumbers(25).join('')}${randomString(1, UpperCaseLetters)}${randomString(1, UpperCaseDigits)}`;
            break;
        case 'CH':  // Switzerland
            partial = `CH${randomNumbers(7).join('')}${randomString(12, UpperCaseDigits)}`;
            break;
        case 'CI':  // Ivory Coast
            partial = `CI${randomNumbers(2).join('')}${randomString(1, UpperCaseLetters)}${randomNumbers(23).join('')}`;
            break;
        case 'CM':  // Cameroon
            partial = `CM${randomNumbers(25).join('')}`;
            break;
        case 'CR':  // Costa Rica
            partial = `CR${randomNumbers(29).join('')}`;
            break;
        case 'CV':  // Cape Verde
            partial = `CV${randomNumbers(23).join('')}`;
            break;
        case 'CY':  // Cyprus
            partial = `CY${randomNumbers(10).join('')}${randomString(16, UpperCaseDigits)}`;
            break;
        case 'CZ':  // Czech Republic
            partial = `CZ${randomNumbers(22).join('')}`;
            break;
        case 'DE':  // Germany
            partial = `DE${randomNumbers(20).join('')}`;
            break;
        case 'DK':  // Denmark
            partial = `DK${randomNumbers(16).join('')}`;
            break;
        case 'DO':  // Dominican Republic
            partial = `DO${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(20).join('')}`;
            break;
        case 'DZ':  // Algeria
            partial = `DZ${randomNumbers(22).join('')}`;
            break;
        case 'EE':  // Estonia
            partial = `EE${randomNumbers(18).join('')}`;
            break;
        case 'ES':  // Spain
            partial = `ES${randomNumbers(22).join('')}`;
            break;
        case 'FI':  // Finland
            partial = `FI${randomNumbers(16).join('')}`;
            break;
        case 'FO':  // Faroe Islands
            partial = `FO${randomNumbers(16).join('')}`;
            break;
        case 'FR':  // France
            partial = `FR${randomNumbers(12).join('')}${randomString(11, UpperCaseDigits)}${randomNumbers(2).join('')}`;
            break;
        case 'GB':  // United Kingdom
            partial = `GB${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(14).join('')}`;
            break;
        case 'GE':  // Georgia
            partial = `GE${randomNumbers(2).join('')}${randomString(2, UpperCaseLetters)}${randomNumbers(16).join('')}`;
            break;
        case 'GI':  // Gibraltar
            partial = `GI${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomString(15, UpperCaseDigits)}`;
            break;
        case 'GL':  // Greenland
            partial = `GL${randomNumbers(16).join('')}`;
            break;
        case 'GR':  // Greece
            partial = `GR${randomNumbers(9).join('')}${randomString(16, UpperCaseDigits)}`;
            break;
        case 'GT':  // Guatemala
            partial = `GT${randomNumbers(2).join('')}${randomString(24, UpperCaseDigits)}`;
            break;
        case 'HR':  // Croatia
            partial = `HR${randomNumbers(19).join('')}`;
            break;
        case 'HU':  // Hungary
            partial = `HU${randomNumbers(26).join('')}`;
            break;
        case 'IE':  // Ireland
            partial = `IE${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(14).join('')}`;
            break;
        case 'IL':  // Israel
            partial = `IL${randomNumbers(21).join('')}`;
            break;
        case 'IR':  // Iran
            partial = `IR${randomNumbers(24).join('')}`;
            break;
        case 'IS':  // Iceland
            partial = `IS${randomNumbers(24).join('')}`;
            break;
        case 'IT':  // Italy
            partial = `IT${randomNumbers(2).join('')}${randomString(1, UpperCaseLetters)}${randomNumbers(10).join('')}${randomString(12, UpperCaseDigits)}`;
            break;
        case 'JO':  // Jordan
            partial = `JO${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(4).join('')}${randomString(8, '0')}${randomString(10, UpperCaseDigits)}`;
            break;
        case 'KW':  // Kuwait
            partial = `KW${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(22).join('')}`;
            break;
        case 'KZ':  // Kazakhstan
            partial = `KZ${randomNumbers(5).join('')}${randomString(13, UpperCaseDigits)}`;
            break;
        case 'LB':  // Lebanon
            partial = `LB${randomNumbers(6).join('')}${randomString(20, UpperCaseDigits)}`;
            break;
        case 'LI':  // Liechtenstein
            partial = `LI${randomNumbers(7).join('')}${randomString(12, UpperCaseDigits)}`;
            break;
        case 'LT':  // Lithuania
            partial = `LT${randomNumbers(18).join('')}`;
            break;
        case 'LU':  // Luxembourg
            partial = `LU${randomNumbers(5).join('')}${randomString(13, UpperCaseDigits)}`;
            break;
        case 'LV':  // Latvia
            partial = `LV${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomString(13, UpperCaseDigits)}`;
            break;
        case 'MC':  // Monaco
            partial = `MC${randomNumbers(12).join('')}${randomString(11, UpperCaseDigits)}${randomNumbers(2).join('')}`;
            break;
        case 'MD':  // Moldova
            partial = `MD${randomNumbers(2).join('')}${randomString(20, UpperCaseDigits)}`;
            break;
        case 'ME':  // Montenegro
            partial = `ME${randomNumbers(20).join('')}`;
            break;
        case 'MG':  // Madagascar
            partial = `MG${randomNumbers(25).join('')}`;
            break;
        case 'MK':  // Macedonia
            partial = `MK${randomNumbers(5).join('')}${randomString(10, UpperCaseDigits)}${randomNumbers(2).join('')}`;
            break;
        case 'ML':  // Mali
            partial = `ML${randomNumbers(2).join('')}${randomString(1, UpperCaseLetters)}${randomNumbers(23).join('')}`;
            break;
        case 'MR':  // Mauritania
            partial = `MR${randomNumbers(25).join('')}`;
            break;
        case 'MT':  // Malta
            partial = `MT${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(5).join('')}${randomString(18, UpperCaseDigits)}`;
            break;
        case 'MU':  // Mauritius
            partial = `MU${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(19).join('')}${randomString(3, UpperCaseLetters)}`;
            break;
        case 'MZ':  // Mozambique
            partial = `MZ${randomNumbers(23).join('')}`;
            break;
        case 'NL':  // Netherlands
            partial = `NL${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(10).join('')}`;
            break;
        case 'NO':  // Norway
            partial = `NO${randomNumbers(13).join('')}`;
            break;
        case 'PK':  // Pakistan
            partial = `PK${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomString(16, UpperCaseDigits)}`;
            break;
        case 'PL':  // Poland
            partial = `PL${randomNumbers(26).join('')}`;
            break;
        case 'PS':  // Palestinian
            partial = `PS${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomString(21, UpperCaseDigits)}`;
            break;
        case 'PT':  // Portugal
            partial = `PT${randomNumbers(23).join('')}`;
            break;
        case 'QA':  // Qatar
            partial = `QA${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomString(21, UpperCaseDigits)}`;
            break;
        case 'RO':  // Romania
            partial = `RO${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomString(16, UpperCaseDigits)}`;
            break;
        case 'RS':  // Serbia
            partial = `RS${randomNumbers(20).join('')}`;
            break;
        case 'SA':  // Saudi Arabia
            partial = `SA${randomNumbers(4).join('')}${randomString(18, UpperCaseDigits)}`;
            break;
        case 'SE':  // Sweden
            partial = `SE${randomNumbers(22).join('')}`;
            break;
        case 'SI':  // Slovenia
            partial = `SI${randomNumbers(17).join('')}`;
            break;
        case 'SK':  // Slovakia
            partial = `SK${randomNumbers(22).join('')}`;
            break;
        case 'SM':  // San Marino
            partial = `SM${randomNumbers(2).join('')}${randomString(1, UpperCaseLetters)}${randomNumbers(10).join('')}${randomString(12, UpperCaseDigits)}`;
            break;
        case 'SN':  // Senegal
            partial = `SN${randomNumbers(2).join('')}${randomString(1, UpperCaseLetters)}${randomNumbers(23).join('')}`;
            break;
        case 'TL':  // East Timor
            partial = `TL${randomNumbers(21).join('')}`;
            break;
        case 'TN':  // Tunisia
            partial = `TN${randomNumbers(22).join('')}`;
            break;
        case 'TR':  // Turkey
            partial = `TR${randomNumbers(7).join('')}${randomString(17, UpperCaseDigits)}`;
            break;
        case 'VG':  // Virgin Islands, British
            partial = `VG${randomNumbers(2).join('')}${randomString(4, UpperCaseLetters)}${randomNumbers(16).join('')}`;
            break;
        case 'XK':  // Republic of Kosovo
            partial = `XK${randomNumbers(18).join('')}`;
            break;
    }

    const value = `${partial.substr(4)}${partial.substr(0, 2)}`;
    const cd = getCheckDigits(value);
    const checkDigits = cd < 10 ? `0${cd}` : `${cd}`;

    return `${partial.substr(0, 2)}${checkDigits}${partial.substr(4)}`;
};

export default fake;
