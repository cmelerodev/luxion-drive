import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    "no-var": process.env.NODE_ENV === "production" ? "off" : "error",  // Desactiva la regla no-var en producción
    "react-hooks/exhaustive-deps": process.env.NODE_ENV === "production" ? "off" : "warn",  // Desactiva las advertencias de dependencias de useEffect en producción
    // Puedes desactivar más reglas si lo deseas
  },
};

export default eslintConfig;
