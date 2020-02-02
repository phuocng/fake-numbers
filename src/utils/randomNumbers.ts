/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomFromRange from './randomFromRange';

/**
 * Generate a random array of digits
 *
 * @param numberOfDigits Number of digits
 * @returns number[]
 */
const randomNumbers = (numberOfDigits: number): number[] => {
    return Array(numberOfDigits).fill(0).map((_, __) => randomFromRange(0, 9));
};

export default randomNumbers;
