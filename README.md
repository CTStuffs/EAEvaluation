# Description

Submission for web-based part of the [Energy Australia Tester Evaluation](https://eacp.energyaustralia.com.au/codingtest/testers).
## Installation

Setup the app from [here](https://github.com/EATechnology/ea-coding-test-samples) and make sure it's running on http:localhost/4200.


Install packages in this repo with npm.

```bash
npm install
```

You may also have to downgrade to node v16.17.0 due to a [Webpack encryption issue](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported).


## Assumptions

The tests were written with the assumption that [this](https://github.com/EATechnology/ea-coding-test-samples/tree/main/web) contained the full extent of the app's functionality (i.e. providing a list of only bands and their associated festivals).

Example:

```
1. Adrian Venti
   * Trainerella
2. Auditones
   * Twisted Tour
```


## Usage

Run either
```
npx cypress open
```

or 

```
npx cypress run
```

Note that the API used in the app has a rate limit, so you may have to wait between test runs.


