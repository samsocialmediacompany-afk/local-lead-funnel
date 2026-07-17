import tseslint from "typescript-eslint";

const coreRules = {
  "no-constant-condition": "error",
  "no-duplicate-case": "error",
  "no-unreachable": "error"
};

export default [
  {
    ignores: [".next/**", "node_modules/**", "outputs/**", "work/**"]
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      }
    },
    rules: coreRules
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: coreRules
  }
];
