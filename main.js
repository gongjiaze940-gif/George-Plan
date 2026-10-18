const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1080, height: 780, minWidth: 420, minHeight: 600,
    title: "George's Plan",
    icon: path.join(__dirname, 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: { backgroundThrottling: false }
  });
  win.loadFile('index.html');
}
app.setAppUserModelId("com.george.plan");
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
