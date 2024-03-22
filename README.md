# Nuxt Prisma

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Prisma module for Nuxt for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/your-org/@lewebsimple/nuxt-prisma?file=playground%2Fapp.vue)

## Features

- 🚀 Prisma client generation before build
- 🪄 Auto-import `prisma` client on the server side
- 🐛 Fix resolution of `.prisma/client/index-browser` (see [prisma#12504](https://github.com/prisma/prisma/issues/12504))

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @lewebsimple/nuxt-prisma
```

Set up Prisma ORM with the init command of the Prisma CLI:

```bash
npx prisma init --datasource-provider sqlite
```

Model your data in the Prisma schema (see the [Quickstart guide](https://www.prisma.io/docs/getting-started/quickstart#2-model-your-data-in-the-prisma-schema)).

The Prisma client is generated automatically before build in development and production (you should restart the development server each time the Prisma schema changes).

That's it! You can now use the auto-imported `prisma` client in the server handlers of your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@lewebsimple/nuxt-prisma/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@lewebsimple/nuxt-prisma

[npm-downloads-src]: https://img.shields.io/npm/dm/@lewebsimple/nuxt-prisma.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@lewebsimple/nuxt-prisma

[license-src]: https://img.shields.io/npm/l/@lewebsimple/nuxt-prisma.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@lewebsimple/nuxt-prisma

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
