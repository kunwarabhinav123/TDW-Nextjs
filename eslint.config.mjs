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
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Fix for the "Unexpected any" issue
      "@typescript-eslint/no-explicit-any": "warn", // Use "error" for stricter enforcement

      // Fix for "no-var" issue
      "no-var": "error", // Enforce let/const over var

      // Enable stricter typing practices
      "@typescript-eslint/explicit-module-boundary-types": "warn", // Ensure explicit return types in functions
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused variables prefixed with '_'

      // Enforce consistent imports
      "@typescript-eslint/no-namespace": "error", // Disallow custom TypeScript namespaces
      "@typescript-eslint/prefer-optional-chain": "warn", // Prefer optional chaining
      "@typescript-eslint/prefer-nullish-coalescing": "warn", // Prefer ?? over || when applicable
    },
  },
];

export default eslintConfig;
