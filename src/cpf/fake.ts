/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import randomNumbers from '../utils/randomNumbers';

/**
 * Generate a random CPF number
 *
 * @see https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
 * @return string
 */
const fake = (): string => {
    const calculateCheckDigit = (sum: number) => {
        const reminder = sum % 11;
        return (reminder < 2) ? 0 : 11 - reminder;
    };

    const partial = randomNumbers(9);
    const firstCheckDigit = calculateCheckDigit(
        partial.map((v, i) => v * (10 - i)).reduce((a, b) => a + b, 0)
    );

    const secondCheckDigit = calculateCheckDigit(
        partial.concat(firstCheckDigit).map((v, i) => v * (11 - i)).reduce((a, b) => a + b, 0)
    );

    const part1 = partial.slice(0, 3).join('');
    const part2 = partial.slice(3, 6).join('');
    const part3 = partial.slice(6).join('');

    return `${part1}.${part2}.${part3}-${(firstCheckDigit)}${secondCheckDigit}`;
};

export default fake;
