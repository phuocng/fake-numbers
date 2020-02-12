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
* [x] 03. BIC (_Business Identifier Code_)
* [x] 04. BTW: Belgian VAT number
* [x] 05. CNPJ (_Cadastro Nacional da Pessoa Jurídica_): Brazilian company identifier
* [x] 06. CPF (_Cadastro de Pessoas Físicas_): Brazilian identification number
* [x] 07. Credit card number
* [x] 08. CUSIP (_Committee on Uniform Security Identification Procedures_)
* [x] 09. CVV (_Card Verification Value_)
* [x] 10. EAN (_International Article Number_)
* [x] 11. IMEI (_International Mobile Equipment Identity_)
* [x] 12. IMO (_International Maritime Organization_)
* [x] 13. ISBN (_International Standard Book Number_)
* [x] 14. ISIN (_International Securities Identification Number_)
* [x] 15. ISMN (_International Standard Music Number_)
* [x] 16. ISSN (_International Standard Serial Number_)
* [x] 17. NIF (_Numéro d'Immatriculation Fiscale_): French tax identification number
* [x] 18. NPI (_National Provider Identifier_)
* [x] 19. NRIC (_Singaporean National Registration Identity Card_)
* [x] 20. RTN (_Routing Transit Number_)
* [x] 21. SEDOL (_Stock Exchange Daily Official List_)
* [x] 22. SIN (_Canadian Social Insurance Number_)
* [x] 23. SIREN
* [x] 24. SIRET (_Système d’Identification du Répertoire des Établissements_)
* [x] 25. SSN (_Social Security number_)
* [x] 26. SVNR: Austrian social insurance number
* [x] 27. TFN: Australian Tax File Number
* [x] 28. UID (_Umsatzsteuer-Identifikationsnummer_): Austrian VAT number
* [x] 29. VIN (_Vehicle Identification Number_): Support US only

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
