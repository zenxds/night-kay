module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "import",
    "react"
  ],
  "rules": {
    "no-unused-vars": 0,
    "no-console": 0,
    "no-empty": 0,
    "semi": 0,
    "eol-last": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0
  }
}
