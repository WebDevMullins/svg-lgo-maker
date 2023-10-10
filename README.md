# SVG Logo Maker &middot; [![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/WebDevMullins/svg-logo-maker/blob/main/LICENSE)

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat" alt="JavaScript Badge">
<img src="https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat" alt="Node.js Badge">
<img src="https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat" alt="Jest Badge">
</p>

A CLI (Node.js) application that generates an SVG file from a user's input using Inquirer.

### User prompts

- Text shown on logo - up to 3 characters
- Choice of 3 shapes - circle, square, or triangle
- Color of both text and shape - must know hexadecimal value

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)

## Installation

Clone repo to destinaton.

Install dependencies using:

```bash
npm install
```

If you wish to use Jest for testing purposes, use the following as well:

```bash
npm install -D jest
```

## Usage

From the root directory, run the following to start the application and answer the given prompts:

```bash
node index.js
```

Once all prompts have been answered, the logo.svg file will be created in the 'examples' directory.

### Demo

[Walkthrough Video](https://watch.screencastify.com/v/vJZrcRTyeAwVI89xex39)

![Gif-Demo](https://github.com/WebDevMullins/svg-logo-maker/assets/6474546/f2c98d7f-0c69-4df0-83be-129c69d1250c)

## Tests

Testing for each file is provided using [Jest](https://jestjs.io).

```bash
npm test
```

## License

SVG Logo Maker is [MIT licensed](./LICENSE).
