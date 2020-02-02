/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random ISSN (International Standard Serial Number)
 *
 * @see https://en.wikipedia.org/wiki/International_Standard_Serial_Number
 * @return string
 */
const fake = (): string => {
    const first = randomNumbers(4);
    const second = randomNumbers(3);
    const partial = first.concat(second);

    const sum = partial.map((v, i) => v * (8 - i)).reduce((a, b) => a + b, 0);
    const reminder = (11 - sum % 11) % 11
    const check = reminder === 10 ? 'X' : `${reminder}`;

    return `${first.join('')}-${second.join('')}${check}`;
};

export default fake;
