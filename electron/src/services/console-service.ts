/**
 * Copyright (c) 2022 Promethean. All Rights Reserved.
 * Unauthorized copying of this file or any part of this file via any medium is strictly prohibited.
 */

/**
 * The ConsoleService class allows the electron process to log to the console window.
 */
 class ConsoleService {
    mainWindow: any = null;
  
    /**
     * Set the main window object that will be used to log the console messages with.
     */
    setMainWindow(mainWindow) {
      this.mainWindow = mainWindow;
    }
  
    /**
     * Allow logging to the devtools console from electron.
     */
    log(s: string) {
      if (this.mainWindow && this.mainWindow.webContents) {
        this.mainWindow.webContents.executeJavaScript(`console.log("${s}")`);
      }
    }
  
    /**
     * Allow logging of errors to the devtools console from electron.
     */
    error(s: string) {
      if (this.mainWindow && this.mainWindow.webContents) {
        this.mainWindow.webContents.executeJavaScript(`console.error("${s}")`);
      }
    }
  
    /**
     * Allow logging of warnings to the devtools console from electron.
     */
    warning(s: string) {
      if (this.mainWindow && this.mainWindow.webContents) {
        this.mainWindow.webContents.executeJavaScript(`console.warn("${s}")`);
      }
    }
  }
  
  export const consoleService = new ConsoleService();
  