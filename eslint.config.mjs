import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs}"], // This ensures all JavaScript and TypeScript files are linted
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Enforce 2-space indentation
      "indent": ["error", 2],
      "quotes": ["error", "double", { avoidEscape: true }],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    }
  }
];

export default eslintConfig;
