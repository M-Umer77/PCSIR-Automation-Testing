import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,

  expect: {
    timeout: 10000,
  },

  use: {
    baseURL: process.env.BASE_URL || "http://10.3.3.86:4008",
    headless: false,

    // Browser ko full screen/maximized jaisa open karega
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"],
    },

    screenshot: "on",

    video: "on",
    trace: "on",
  },

  reporter: "list",
});
