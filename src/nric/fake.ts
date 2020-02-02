/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromArray from '../utils/randomFromArray';
import randomNumbers from '../utils/randomNumbers';

const CitizenCheck = 'JZIHGFEDCBA'.split('');
const ForeignerCheck = 'XWUTRQPNMLK'.split('');

/**
 * Generate a random NRIC (Singaporean National Registration Identity Card)
 *
 * @see https://en.wikipedia.org/wiki/National_Registration_Identity_Card
 * @return string
 */
const fake = (): string => {
    // The first character can be S, T, F or G
    const first = randomFromArray(['S', 'T', 'F', 'G']);

    // Next is 7 digits
    const partial = randomNumbers(7);

    const weight = [2, 7, 6, 5, 4, 3, 2];
    const sum = partial.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    const finalSum = (first === 'T' || first === 'G') ? sum + 4 : sum;
    const reminder = finalSum % 11;

    const checkChar = (first === 'S' || first === 'T') ? CitizenCheck[reminder] : ForeignerCheck[reminder];

    return `${first}${partial.join('')}${checkChar}`;
};

export default fake;
