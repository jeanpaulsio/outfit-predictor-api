Linting

```
yarn add --dev babel-eslint eslint eslint-plugin-react
```

.eslintrc

```
{
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": ["eslint:recommended", "plugin:react/recommended"],
}
```
