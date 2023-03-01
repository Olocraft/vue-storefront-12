/** @type {import('tailwindcss').Config} */

const config = require("@storefront-ui/tailwind-config/index.json");
module.exports = {
  ...config,
  content: [
    ...config.content,
    "../../../node_modules/@storefront-ui/vue/shared/**/*.ts",
    "../../../node_modules/@storefront-ui/vue/components/**/*.{ts,vue}",
  ],
};
