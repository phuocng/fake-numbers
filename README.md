# Fake Numbers
Generate fake, valid numbers. Check if a given number is valid.

![Fake Numbers](https://fakenumbers.io/assets/screenshot.png)

## Usage

The following piece of code generates a fake, valid credit card number.

1. Use the [@phuocng/fake-numbers](https://www.npmjs.com/package/@phuocng/fake-numbers) package

~~~ javascript
import { creditCard } from '@phuocng/fake-numbers';

// Generate a fake credit card number
const creditCardNumber = creditCard.fake();

// Check if a given value is a valid credit card nunber
creditCard.check(creditCardNumber).valid;       // returns `true`
~~~

2. Use the umd package in the browser:

~~~ html
<script src="https://unpkg.com/@phuocng/fake-numbers@1.0.0/umd/fake-numbers.min.js"></script>

<script>
// Fake a credit card number
const number = FakeNumbers.creditCard.fake();

// Check a credit card number
const isValid = FakeNumbers.creditCard.check('given number').valid;
</script>
~~~

## Supported numbers

* [x] 01. ABN: Australian Business Number
* [x] 02. ACN: Australian Company Number
* [x] 03. ALV (_Arvonlisäveronumero_): Finnish VAT number
* [x] 04. ANUM: Hungarian VAT number
* [x] 05. BIC: Business Identifier Code
* [x] 06. BN: Canadian Business Number
* [x] 07. BTW: Belgian VAT number
* [x] 08. CNPJ (_Cadastro Nacional da Pessoa Jurídica_): Brazilian company identifier
* [x] 09. CPF (_Cadastro de Pessoas Físicas_): Brazilian identification number
* [x] 10. Credit card number
* [x] 11. CUSIP (_Committee on Uniform Security Identification Procedures_)
* [x] 12. CVR: Danish VAT number
* [x] 13. CVV: Card Verification Value
* [x] 14. DDV: Slovenian VAT number
* [x] 15. EAN: International Article Number
* [x] 16. FPA: Greek VAT number
* [x] 17. IBAN: International Bank Account Number
* [x] 18. IMEI: International Mobile Equipment Identity
* [x] 19. IMO: International Maritime Organization
* [x] 20. ISBN: International Standard Book Number
* [x] 21. ISIN: International Securities Identification Number
* [x] 22. ISMN: International Standard Music Number
* [x] 23. ISSN: International Standard Serial Number
* [x] 24. NIF (_Numéro d'Immatriculation Fiscale_): French tax identification number
* [x] 25. NPI: National Provider Identifier
* [x] 26. NRIC: Singaporean National Registration Identity Card
* [x] 27. PVM: Lithuanian VAT number
* [x] 28. RIF (_Registro de Identificación Fiscal_): Venezuelan VAT number
* [x] 29. RTN: Routing Transit Number
* [x] 30. SEDOL: Stock Exchange Daily Official List
* [x] 31. SIN: Canadian Social Insurance Number
* [x] 32. SIREN
* [x] 33. SIRET (_Système d’Identification du Répertoire des Établissements_)
* [x] 34. SSN: Social Security number
* [x] 35. SVNR: Austrian social insurance number
* [x] 36. TFN: Australian Tax File Number
* [x] 37. TRN: South African Tax Reference Number
* [x] 38. UID (_Umsatzsteuer-Identifikationsnummer_): Austrian VAT number
* [x] 39. VIN: Vehicle Identification Number (Support US only)
* [x] 40. VKN: Turkish tax identification number

## License
Purchase a Commercial License at the [official website](https://fakenumbers.io)

## About

This project is developed by [Nguyen Huu Phuoc](https://twitter.com/nghuuphuoc).
You might be interesting in my projects:

| Product                                           | Description                                                       |
|---------------------------------------------------|-------------------------------------------------------------------|
| [Blur Page](https://blur.page)                    | A browser extension to hide sensitive information on a web page   |
| [CSS Layout](https://csslayout.io)                | A collection of popular layouts and patterns made with CSS        |
| [Fake Numbers](https://fakenumbers.io)            | Generate fake and valid numbers                                   |
| [Form Validation](https://formvalidation.io)      | The best validation library for JavaScript                        |
| [React PDF Viewer](https://react-pdf-viewer.dev)  | A React component to view a PDF document                          |
