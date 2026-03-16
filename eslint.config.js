const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  // Ignorar cosas que no queremos lintar
  {
    ignores: [
      "node_modules/**",
      "eslint.config.*",   // ignora .js/.mjs por si vuelve a aparecer
    ],
  },

  // Reglas recomendadas base
  js.configs.recommended,

  // Config para tu código Node/CommonJS
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },
];
