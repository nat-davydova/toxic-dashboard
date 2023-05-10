module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "airbnb-base",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ["react-refresh", "@typescript-eslint", "prettier", "promise", "import", "react-hooks"],
  rules: {
    'react-refresh/only-export-components': 'error',
    "import/order": [
      2,
      {
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": false
        },
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"]
      }
    ],
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    'no-undef': 'off',
    'import/no-extraneous-dependencies': 'off'
  },
}
