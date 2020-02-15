/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

export interface CheckResult<T> {
    valid: boolean;
    meta?: T;
}

export interface FakeCheck<C> {
    fake(): string;
    check(input: string): CheckResult<C>;
}

export type DefaultFakeCheck = FakeCheck<{}>;

export interface FakeCheckWithType<F, C> {
    fake(type?: F): string;
    check(input: string): CheckResult<C>;
}

// -----------------
// Supported numbers

export const abn: DefaultFakeCheck;
export const acn: DefaultFakeCheck;
export const alv: DefaultFakeCheck;
export const bic: DefaultFakeCheck;
export const btw: DefaultFakeCheck;
export const cnpj: DefaultFakeCheck;
export const cpf: DefaultFakeCheck;

// Credit card
export enum CreditCardType {
    AmericanExpress = 'AmericanExpress',
    Discover = 'Discover',
    Jcb = 'Jcb',
    Maestro = 'Maestro',
    Master = 'Master',
    Visa = 'Visa',
    Dankort = 'Dankort',
    DinnerClub = 'DinnerClub',
    DinnerClubUs = 'DinnerClubUs',
    Forbrugsforeningen = 'Forbrugsforeningen',
    Laser = 'Laser',
    Solo = 'Solo',
    UnionPay = 'UnionPay',
    VisaElectron = 'VisaElectron',
}

export const creditCard: FakeCheckWithType<CreditCardType, CreditCardType[]>;

export const cusip: DefaultFakeCheck;
export const cvr: DefaultFakeCheck;
export const cvv: DefaultFakeCheck;
export const ddv: DefaultFakeCheck;
export const ean: DefaultFakeCheck;
export const imei: DefaultFakeCheck;
export const imo: DefaultFakeCheck;

// ISBN
export enum IsbnType {
    Isbn10 = 'Isbn10',
    Isbn13 = 'Isbn13',
}
export const isbn: FakeCheckWithType<IsbnType, { type: IsbnType }>;

export const isin: DefaultFakeCheck;

export enum IsmnType {
    Ismn10 = 'Ismn10',
    Ismn13 = 'Ismn13',
}
export const ismn: FakeCheckWithType<IsmnType, { type: IsmnType }>;

export const issn: DefaultFakeCheck;
export const nif: DefaultFakeCheck;
export const npi: DefaultFakeCheck;
export const nric: DefaultFakeCheck;
export const pvm: DefaultFakeCheck;

export enum RifCompanyType {
    CitizenPerson = 'V',
    ForeignPerson = 'E',
    Company = 'J',
    Passport = 'P',
    Government = 'G',
}
export const rif: FakeCheckWithType<RifCompanyType, { type: RifCompanyType }>;

export const rtn: DefaultFakeCheck;
export const sedol: DefaultFakeCheck;
export const sin: DefaultFakeCheck;
export const siren: DefaultFakeCheck;
export const siret: DefaultFakeCheck;
export const ssn: DefaultFakeCheck;
export const svnr: DefaultFakeCheck;
export const tfn: DefaultFakeCheck;
export const uid: DefaultFakeCheck;
export const vin: DefaultFakeCheck;
export const vkn: DefaultFakeCheck;
