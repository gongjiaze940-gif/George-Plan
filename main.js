const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1080, height: 780, minWidth: 420, minHeight: 600,
    title: "George's Plan",
    icon: path.join(__dirname, 'build', 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: { backgroundThrottling: false } // 最小化后提醒依然准时
  });
  win.loadFile('index.html');
}
app.setAppUserModelId("com.george.plan");
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
