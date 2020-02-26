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
    let value = input.replace(/\s/g, '');
    if (value.substr(0, 2) === 'GR' || value.substr(0, 2) === 'EL') {
        value = value.substr(2);
    }
    if (!/^\d{8,9}$/.test(value)) {
        return { valid: false };
    }

    value = value.length === 8 ? `0${value}` : `${value}`;
    const digits = value.substr(0, 8).split('').map((c) => parseInt(c, 10));
    const cd = checkDigit(digits);

    return { valid: `${cd}` === value.substr(8, 1) };
}

export default check;
