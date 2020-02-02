/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';
import IsmnType from './IsmnType';

/**
 * Generate a random ISMN (International Standard Music Number)
 *
 * @see https://en.wikipedia.org/wiki/International_Standard_Music_Number
 * @return string
 */
const fake = (type?: IsmnType): string => {
    const tpe = (typeof type === undefined) ? randomFromArray([IsmnType.Ismn10, IsmnType.Ismn13]) : type;

    const digits = randomNumbers(8);
    const withPrefix = [9, 7, 9, 0].concat(digits);

    // Calculate the check digit
    const sum = withPrefix.map((v, i) => i % 2 === 0 ? v : v * 3).reduce((a, b) => a + b, 0);
    const checkDigit = (10 - sum % 10) % 10;

    // Build the ISMN
    const ismn = tpe === IsmnType.Ismn10
        ? digits.concat([checkDigit]).join('')
        : withPrefix.concat([checkDigit]).join('');

    // Prefix M for ISMN 10 format
    return tpe === IsmnType.Ismn10 ? `M${ismn}` : ismn;
};

export default fake;
