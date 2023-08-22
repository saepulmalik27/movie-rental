# Introduction

this project is about movie rental, wit chart feature and movie catalog you can see the [demo here](https://saepulmalik.my.id)

# Setup project

this is how i setup this project, i will explain step by step below here

### Add depedency

```
yarn add "@testing-library/jest-dom" "@testing-library/react" "@typescript-eslint/eslint-plugin" "eslint-config-prettier" "eslint-plugin-prettier" "eslint-plugin-react" "husky" "jest" "jest-environment-jsdom" "prettier" "prettier-plugin-tailwindcss" "lint-staged" "@headlessui/react" "nextjs-toploader"
```

### Setup eslint

```
# .eslintrc.json
{
  "extends": ["next", "next/core-web-vitals", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "no-console": "warn",
    "no-use-before-define": "error",
    "no-unused-vars": "error"
  }
}
```

### Setup Prettier

```
# .prettierrc
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```

and then setup .prettierignore

```
.next
.cache
package-lock.json
public
node_modules
next-env.d.ts
next.config.ts
yarn.lock
```

### Setup & init husky

```
npx husky-init

#then run

npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

read this for more documentation about husky [husky Documentation](https://typicode.github.io/husky/getting-started.html)

### Setup Lint-staged

```
# lintstaged.config.js
module.exports = {
  // this will check Typescript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // This will lint and format TypeScript and                                             //JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn eslint --fix ${filenames.join(" ")}`,
    `yarn prettier --write ${filenames.join(" ")}`,
  ],

  // this will Format MarkDown and JSON
  "**/*.(md|json)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}`,
};
```

and then change husky `pre-commit` inside `.husky`

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Add the following
yarn lint-staged
```
