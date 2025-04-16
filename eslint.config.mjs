// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const eslintConfig = [
  // Next.js 核心规则
  ...compat.extends("next/core-web-vitals"),

  // ESLint 推荐规则
  js.configs.recommended,

  // TypeScript 支持
  {
    files: ["​**​/*.ts", "​**​/*.tsx"],
    plugins: { "@typescript-eslint": tsPlugin },
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  // React 规则
  {
    plugins: { react: reactPlugin },
    languageOptions: {
      globals: {
        React: "readonly", // 声明 React 为全局变量
      },
    },
  },

  // Prettier 兼容
  prettierConfig,
  {
    ignores: [".next/", "node_modules/", "dist/"],
  },
];

export default eslintConfig;
