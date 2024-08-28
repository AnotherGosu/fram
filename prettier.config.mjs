/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  importOrder: [
    "^@/types",
    "^@/locales",
    "^@/api",
    "^@/utils",
    "^@/constants",
    "^@/images",
    "^@/lib",
    "^@/hooks",
    "^@/components",
    "^@/",
    "^./components",
    "^./",
  ],
  importOrderSeparation: true,
  insertPragma: false,
  jsxSingleQuote: false,
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  pluginSearchDirs: false,
  printWidth: 80,
  proseWrap: "preserve",
  quoteProps: "consistent",
  requirePragma: false,
  semi: true,
  singleAttributePerLine: true,
  singleQuote: false,
  tabWidth: 2,
  tailwindFunctions: ["cva"],
  trailingComma: "all",
  useTabs: false,
  vueIndentScriptAndStyle: false,
};

export default config;
