import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: [
      "src/**/e2e.test.{ts,tsx}",
      "src/**/integration.test.{ts,tsx}",
    ],
  },

  component: {
    specPattern: [
      "src/**/unit.test.{ts,tsx}",
      "src/**/component.test.{ts,tsx}",
    ],
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
