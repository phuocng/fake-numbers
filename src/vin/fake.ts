/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { Digits } from '../CharSet';
import randomString from '../utils/randomString';
import { Chars, Weights } from './const';

/**
 * Generate a random US VIN (Vehicle Identification Number)
 *
 * @see https://en.wikipedia.org/wiki/Vehicle_identification_number#Check-digit_calculation
 * @return string
 */
const fake = (): string => {
    // Don't accept I, O, Q characters
    const charsSet = `ABCDEFGHJKLMNPRSTUVWXYZ${Digits}`;

    const generated = `${randomString(8, charsSet)}${randomString(1, `${Digits}X`)}${randomString(8, charsSet)}`;
    const sum = generated.split('').map((c, index) => Chars[c] * Weights[index]).reduce((a, b) => a + b, 0);
    const reminder = sum % 11;
    const checkCharacter = reminder === 10 ? 'X' : `${reminder}`;

    return `${generated.substr(0, 8)}${checkCharacter}${generated.substr(9)}`;
};

export default fake;
