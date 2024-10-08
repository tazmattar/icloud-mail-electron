const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'dist/bundle.js'),  // Use the bundled JavaScript from Webpack
      nodeIntegration: false,  // Ensure Node.js integration is disabled for security
      contextIsolation: true,  // Context isolation for better security
    }
  });

  // Load iCloud Mail
  win.loadURL('https://www.icloud.com/mail/');

  // Optionally remove the menu bar for a clean interface
  win.removeMenu();

  // Persist session between app launches
  const userSession = session.defaultSession;

  // Listen for the did-finish-load event to inject JavaScript
  win.webContents.on('did-finish-load', () => {
    // Inject JavaScript to hide the quick access button
    win.webContents.executeJavaScript(`
      const quickAccessButton = document.querySelector('[aria-label="App Launcher"]');
      if (quickAccessButton) {
        quickAccessButton.style.display = 'none';
      }
    `);
  });

  // Disable navigation outside of iCloud Mail
  win.webContents.on('will-navigate', (event, newURL) => {
    if (newURL !== 'https://www.icloud.com/mail/') {
      event.preventDefault();  // Prevents navigation to other URLs
    }
  });

  // Prevent popups from opening in new windows
  win.webContents.on('new-window', (event, newURL) => {
    if (newURL !== 'https://www.icloud.com/mail/') {
      event.preventDefault();  // Prevents pop-ups
    }
  });

  // Save cookies and session data
  app.on('before-quit', () => {
    userSession.cookies.flushStore();
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

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
