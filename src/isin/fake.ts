/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Hex } from '../CharSet';
import luhn, { DoublePosition } from '../utils/luhn';
import randomFromArray from '../utils/randomFromArray';
import randomString from '../utils/randomString';
import CountryCodes from './CountryCodes';

/**
 * Generate a random ISIN (International Securities Identification Number)
 *
 * @see https://en.wikipedia.org/wiki/International_Securities_Identification_Number
 * @return string
 */
const fake = (countryCode?: string): string => {
    const country = countryCode || randomFromArray(CountryCodes.split('|'));
    const partial = `${country}${randomString(9, Hex)}`;

    // Convert letters to numbers
    const charCode = partial.split('').map((_, i) => {
        const c = partial.charCodeAt(i);
        return (c > 57) ? `${(c - 55)}` : partial.charAt(i);
    });

    const split = charCode.join('').split('').map((c) => parseInt(c, 10));
    const group = (split.length % 2 === 0) ? DoublePosition.Old : DoublePosition.Even;
    const checkDigit = luhn(split, group);

    return `${partial}${checkDigit}`;
};

export default fake;
