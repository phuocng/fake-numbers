/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import checkDigit from './checkDigit';

const check = (input: string): CheckResult<{}> => {
    const v = input.replace(/\s/g, '');
    if (!/^\d{10}$/.test(v) || v.substr(0, 1) === '0') {
        return { valid: false };
    }

    const serial = parseInt(v.substr(0, 3), 10);
    const dob = v.substr(4);
    const cd = checkDigit(serial, dob);

    return { valid: `${cd.checkDigit}` === v.substr(3, 1) };
};

export default check;
