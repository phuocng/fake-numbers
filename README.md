# Fake Numbers
Generate fake, valid numbers. Check if a given number is valid.

The following piece of code generates a fake, valid credit card number.

~~~ javascript
import { creditCard } from '@phuocng/fake-numbers';

// Generate a fake credit card number
const creditCardNumber = creditCard.fake();

// Check if a given value is a valid credit card nunber
creditCard.check(creditCardNumber).valid;       // returns `true`
~~~

## Supported numbers

* [x] 01. BIC (_Business Identifier Code_)
* [x] 02. CNPJ (_Cadastro Nacional da Pessoa Jurídica_): Brazilian company identifier
* [x] 03. CPF (_Cadastro de Pessoas Físicas_): Brazilian identification number
* [x] 04. Credit card number
* [x] 05. CUSIP (_Committee on Uniform Security Identification Procedures_)
* [x] 06. CVV (_Card Verification Value_)
* [x] 07. EAN (_International Article Number_)
* [x] 08. IMEI (_International Mobile Equipment Identity_)
* [x] 09. IMO (_International Maritime Organization_)
* [x] 10. ISBN (_International Standard Book Number_)
* [x] 11. ISIN (_International Securities Identification Number_)
* [x] 12. ISMN (_International Standard Music Number_)
* [x] 13. ISSN (_International Standard Serial Number_)
* [x] 14. NIF (_Numéro d'Immatriculation Fiscale_): French tax identification number
* [x] 15. NPI (_National Provider Identifier_)
* [x] 16. NRIC (_Singaporean National Registration Identity Card_)
* [x] 17. RTN (_Routing Transit Number_)
* [x] 18. SEDOL (_Stock Exchange Daily Official List_)
* [x] 19. SIN (_Canadian Social Insurance Number_)
* [x] 20. SIREN
* [x] 21. SIRET (_Système d’Identification du Répertoire des Établissements_)
* [x] 22. SSN (_Social Security number_)
* [x] 23. VIN (_Vehicle Identification Number_): Support US only

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
