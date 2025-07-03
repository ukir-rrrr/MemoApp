export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.node } },
  ...tseslint.configs.recommended,
  ...pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "semi": "off",  // または ["error", "never"]
      "comma-dangle": ["error", "never"],
      "@typescript-eslint/semi": "off" // TypeScript用も追加
    }
  }
]);