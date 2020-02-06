/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';
import { Chars, Weights } from './const';

const check = (input: string): CheckResult<{}> => {
    // Don't accept I, O, Q characters
    if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(input)) {
        return { valid: false };
    }

    const v = input.toUpperCase();
    const sum = v.split('').map((c, i) => Chars[c] * Weights[i]).reduce((a, b) => a + b, 0);
    let reminder = `${sum % 11}`;
    if (reminder === '10') {
        reminder = 'X';
    }

    return { valid: reminder === v.charAt(8) };
};

export default check;
