/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import checkDigits from './checkDigits';

const check = (input: string): CheckResult<{}> => {
    const value = input.replace(/\s/g, '');
    if (!/^\d{11}$/.test(value)) {
        return { valid: false };
    }

    const digits = value.substr(2).split('').map((c) => parseInt(c, 10));
    const remainder = checkDigits(digits);

    return { valid: `${remainder}` === value.substr(0, 2) };
}

export default check;
