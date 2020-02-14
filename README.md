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

* [x] 01. ABN (_Australian Business Number_)
* [x] 02. ACN (_Australian Company Number_)
* [x] 03. ALV (_Arvonlisäveronumero_): Finnish VAT number
* [x] 04. BIC (_Business Identifier Code_)
* [x] 05. BTW: Belgian VAT number
* [x] 06. CNPJ (_Cadastro Nacional da Pessoa Jurídica_): Brazilian company identifier
* [x] 07. CPF (_Cadastro de Pessoas Físicas_): Brazilian identification number
* [x] 08. Credit card number
* [x] 09. CUSIP (_Committee on Uniform Security Identification Procedures_)
* [x] 10. CVV (_Card Verification Value_)
* [x] 11. EAN (_International Article Number_)
* [x] 12. IMEI (_International Mobile Equipment Identity_)
* [x] 13. IMO (_International Maritime Organization_)
* [x] 14. ISBN (_International Standard Book Number_)
* [x] 15. ISIN (_International Securities Identification Number_)
* [x] 16. ISMN (_International Standard Music Number_)
* [x] 17. ISSN (_International Standard Serial Number_)
* [x] 18. NIF (_Numéro d'Immatriculation Fiscale_): French tax identification number
* [x] 19. NPI (_National Provider Identifier_)
* [x] 20. NRIC (_Singaporean National Registration Identity Card_)
* [x] 21. RTN (_Routing Transit Number_)
* [x] 22. SEDOL (_Stock Exchange Daily Official List_)
* [x] 23. SIN (_Canadian Social Insurance Number_)
* [x] 24. SIREN
* [x] 25. SIRET (_Système d’Identification du Répertoire des Établissements_)
* [x] 26. SSN (_Social Security number_)
* [x] 27. SVNR: Austrian social insurance number
* [x] 28. TFN: Australian Tax File Number
* [x] 29. UID (_Umsatzsteuer-Identifikationsnummer_): Austrian VAT number
* [x] 30. VIN (_Vehicle Identification Number_): Support US only

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
