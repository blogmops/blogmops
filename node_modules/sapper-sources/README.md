<h1 align="center">Sapper Sources</h1>

<div align="center">
  Pre-built <code>content sources</code> for your Sapper Application
</div>

<br />

<div align="center">
  <!-- License -->
  <img alt="GitHub" src="https://img.shields.io/github/license/apvarun/sapper-sources?style=flat-square">
  <!-- NPM version -->
  <a href="https://npmjs.org/package/sapper-sources">
    <img src="https://img.shields.io/npm/v/sapper-sources.svg?style=flat-square"
      alt="NPM version" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.com/apvarun/sapper-sources">
    <img src="https://img.shields.io/travis/apvarun/sapper-sources/master.svg?style=flat-square"
      alt="Build Status" />
  </a>
</div>

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Built With](#Built-With)
- [Contributing](#Contributing)
- [Roadmap](#Roadmap)
- [License](#License)

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com) to install Sapper Sources.

```bash
npm install sapper-sources

# or

yarn add sapper-sources
```

## Usage

Example to setup markdown as source for your sapper application.

```javascript
import sapperSource, { markdownSource } from 'sapper-sources';

export default {
  source: sapperSource({
    plugin: markdownSource,
    options: {
      contentPath: '/content/',
    },
  }),
};
```

## Built With

* [Stunning Theme](https://github.com/apvarun/sapper-stunning-theme) - Starter blog theme built on top of Sapper(Svelte).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Roadmap

- [x] Markdown Support
- [x] Gatsby Source Plugin Support
- [ ] JSON Support
- [ ] Relative image path support

## License

[MIT](LICENSE).
