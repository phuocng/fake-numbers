/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import luhn, { DoublePosition } from '../utils/luhn';
import CountryCodes from './CountryCodes';

const check = (input: string): CheckResult<{}> => {
    const regex = new RegExp(`^(${CountryCodes})[0-9A-Z]{10}$`);
    if (!regex.test(input)) {
        return { valid: false };
    }

    const chars = input.split('');
    const lastChar = chars.pop();

    // Convert letters to number
    const charCode = chars.map((_, i) => {
        const c = input.charCodeAt(i);
        return (c > 57) ? `${(c - 55)}` : input.charAt(i);
    });

    const split = charCode.join('').split('').map((c) => parseInt(c, 10));
    const group = (split.length % 2 === 0) ? DoublePosition.Old : DoublePosition.Even;
    const checkDigit = luhn(split, group);

    return { valid: `${checkDigit}` === lastChar };
};

export default check;
