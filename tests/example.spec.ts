import { _electron as electron } from "playwright";
import { test, expect } from "@playwright/test";
import { findLatestBuild, parseElectronApp } from "electron-playwright-helpers";

test("Authentication", async () => {
  const latestBuild = findLatestBuild();
  const appInfo = parseElectronApp(latestBuild);

  // Launch Electron app
  const electronApp = await electron.launch({ args: ["."] });
  const window = await electronApp.firstWindow();

  await window.screenshot({ path: "intro.png" });

  // window.getByRole("button", { name: "Continue with Google" }).click();

  // const dashboardPage = await window.waitForSelector("text=Dashboard");
  // expect(dashboardPage).toBeTruthy();

  // Close the app
  await electronApp.close();
});
