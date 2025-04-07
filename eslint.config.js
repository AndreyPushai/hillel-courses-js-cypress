import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginCypress from "eslint-plugin-cypress/flat";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: { 
        globals: globals.node,
        ecmaVersion: 'latest',
        sourceType: 'module'
    }},
    pluginJs.configs.recommended,
    pluginCypress.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            "cypress": pluginCypress
        }
    },
    {
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "cypress/no-unnecessary-waiting": "off"
        }
    },
    {ignores: ["dist/", "cypress/reports/"]}
];
