/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random CNPJ number
 *
 * @see https://en.wikipedia.org/wiki/CNPJ
 * @return string
 */
const fake = (): string => {
    const calculateCheckDigit = (arr: number[], weight: number[]) => {
        const sum = arr.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);
        const reminder = sum % 11;
        return (reminder < 2) ? 0 : 11 - reminder;
    };

    const partial = randomNumbers(12);

    // See https://www.geradorcnpj.com/algoritmo_do_cnpj.htm
    const w1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const firstCheckDigit = calculateCheckDigit(partial, w1);

    const w2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const secondCheckDigit = calculateCheckDigit(partial.concat(firstCheckDigit), w2);

    const part1 = partial.slice(0, 2).join('');
    const part2 = partial.slice(2, 5).join('');
    const part3 = partial.slice(5, 8).join('');
    const part4 = partial.slice(8).join('');

    return `${part1}.${part2}.${part3}/${part4}-${(firstCheckDigit)}${secondCheckDigit}`;
};

export default fake;
