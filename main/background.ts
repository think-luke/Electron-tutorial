import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const windows = new Set();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
  });
  
  const sampleWindow = createWindow("sample", {
    width: 700,
    height: 400,
    show: false,
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
    await sampleWindow.loadURL("app://./sample.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    await sampleWindow.loadURL(`http://localhost:${port}/sample`);
  }

  ipcMain.on("show-sample", () => {
    sampleWindow.show();
  });

  ipcMain.on('close-one-window', () => {
    console.log(windows);
    windows.delete(mainWindow);
    console.log(windows);
  })

})();

app.on('window-all-closed', () => {
  app.quit();
});
