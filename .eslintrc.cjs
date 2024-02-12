module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:astro/recommended"],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
        "prettier/prettier": "off",
      },
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      env: {
        node: true,
        "astro/astro": true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        // The script of Astro components uses ESM.
        sourceType: "module",
      },
      processor: "astro/client-side-ts",
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
