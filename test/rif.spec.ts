/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { expect } from 'chai';

import { rif, RifCompanyType } from '../src';

describe('RIF number', () => {
    it('Fake RIF number', () => {
        const number = rif.fake(RifCompanyType.CitizenPerson);
        const result = rif.check(number);
        expect(result.valid).to.be.true;
    });

    it('Invalid RIF numbers', () => {
        [
            'V67267726',        // Invalid length
            'K672677269',       // Has invalid character (K)
            'V672677268',       // Invalid check digits
        ].forEach((n) => expect(rif.check(n).valid).to.be.false);
    });

    it('Valid RIF numbers with type of CitizenPerson', () => {
        const number = rif.fake(RifCompanyType.CitizenPerson);
        const result = rif.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(RifCompanyType.CitizenPerson);
    });

    it('Valid RIF numbers with type of ForeignPerson', () => {
        const number = rif.fake(RifCompanyType.ForeignPerson);
        const result = rif.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(RifCompanyType.ForeignPerson);
    });

    it('Valid RIF numbers with type of Company', () => {
        const number = rif.fake(RifCompanyType.Company);
        const result = rif.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(RifCompanyType.Company);
    });

    it('Valid RIF numbers with type of Passport', () => {
        const number = rif.fake(RifCompanyType.Passport);
        const result = rif.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(RifCompanyType.Passport);
    });

    it('Valid RIF numbers with type of Government', () => {
        const number = rif.fake(RifCompanyType.Government);
        const result = rif.check(number);
        expect(result.valid).to.be.true;
        expect(result.meta.type).to.equal(RifCompanyType.Government);
    });

    it('Valid RIF numbers', () => {
        [
            'J309272292', 'V242818101', 'J000126518', 'J000458324',
            'V114702834', 'P500878830', 'P877946237', 'E344743293', 'V119266889',
        ].forEach((n) => expect(rif.check(n).valid).to.be.true);
    });

    it('Valid RIF numbers with VE prefix', () => {
        [
            'VEP501746482', 'VEV757535552', 'VEJ882644625', 'VEG950645417', 'VEG423899540',
        ].forEach((n) => expect(rif.check(n).valid).to.be.true);
    });
});
