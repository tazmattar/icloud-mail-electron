const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'dist/bundle.js'),  // Use the bundled JavaScript from Webpack
      nodeIntegration: false,  // Ensure Node.js integration is disabled for security
      contextIsolation: true,  // Context isolation for better security
    }
  });

  // Directly load iCloud Mail
  win.loadURL('https://www.icloud.com/mail/');

  // Optionally remove the menu bar for a clean interface
  win.removeMenu(); 

  // Inject JavaScript to hide the quick access button
  win.webContents.on('did-finish-load', () => {
    win.webContents.executeJavaScript(`
      // Find the quick access button (top-right grid icon) and hide it
      const quickAccessButton = document.querySelector('[aria-label="App Launcher"]');
      if (quickAccessButton) {
        quickAccessButton.style.display = 'none';
      }
    `);
  });

  // Disable navigation to URLs outside iCloud Mail
  win.webContents.on('will-navigate', (event, newURL) => {
    if (newURL !== 'https://www.icloud.com/mail/') {
      event.preventDefault(); // Prevents navigation to other URLs
    }
  });

  // Prevent opening new windows (pop-ups)
  win.webContents.on('new-window', (event, newURL) => {
    if (newURL !== 'https://www.icloud.com/mail/') {
      event.preventDefault(); // Prevents any pop-up windows
    }
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
