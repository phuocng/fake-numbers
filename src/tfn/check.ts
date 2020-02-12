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
    if (!/^\d{8,9}$/.test(value)) {
        return { valid: false };
    }

    const digits = value.split('').map((c) => parseInt(c, 10));
    const first = digits.shift();

    return { valid: first === checkDigits(digits) };
};

export default check;
