/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { CompanyType } from './CompanyType';

const CompanyWeight = new Map<CompanyType, number>([
    [CompanyType.CitizenPerson, 4],
    [CompanyType.ForeignPerson, 8],
    [CompanyType.Company, 12],
    [CompanyType.Passport, 16],
    [CompanyType.Government, 20],
]);

const checkDigits = (companyType: CompanyType, input: number[]): number => {
    const weight = [3, 2, 7, 6, 5, 4, 3, 2];
    const sum = CompanyWeight.get(companyType) + input.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    const remainder = 11 - sum % 11;
    return (remainder === 10 || remainder === 11) ? 0 : remainder;
};

export default checkDigits;
