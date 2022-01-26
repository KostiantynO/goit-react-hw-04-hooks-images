2022-01-26 02-16 -> new zip from
https://github.com/goitacademy/react-homework-template.git

```shell
npm i -D prettier eslint prop-types nanoid react-icons react-toastify react-loading-icons react-loading-skeleton
git remote add origin https://github.com/KostiantynO/goit-react-hw-04-hooks-images.git
```

`package.json`

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-04-hooks-images",

  "lint-staged": {
    "*.{js,jsx}": "eslint --cache --fix",
    "*.{js,jsx,css,sass,md}": "prettier --write"
  }
```

`jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "exclude": ["node_modules", "build"],
  "include": ["src"]
}
```
