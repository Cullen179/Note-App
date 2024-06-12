import { test, _electron as electron } from "@playwright/test";

import { findLatestBuild, parseElectronApp } from "electron-playwright-helpers";

test("basic test", async () => {
  const latestBuild = findLatestBuild();
  const appInfo = parseElectronApp(latestBuild);
  // Launch Electron app.
  const electronApp = await electron.launch({ args: [appInfo.main] });

  // Evaluation expression in the Electron context.
  const appPath = await electronApp.evaluate(async ({ app }) => {
    // This runs in the main Electron process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.getAppPath();
  });
  console.log(appPath);

  // Get the first window that the app opens, wait if necessary.
  const window = await electronApp.firstWindow();
  // Print the title.
  console.log(await window.title());
  // Capture a screenshot.
  await window.screenshot({ path: "intro.png" });
  // Direct Electron console to Node terminal.
  window.on("console", console.log);
  // Exit app.
  await electronApp.close();
});
