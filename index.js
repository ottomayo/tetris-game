const { app, BrowserWindow } = require('electron');
require('electron-reloader')(module)

const devTools = false;

app.whenReady().then(() => {

    const window = new BrowserWindow({
        width: devTools ? 1000 : 400,
        height: 620,
        webPreferences: {
            nodeIntegration: true
        },
        frame: true,
        transparent: true,
        
    });

    window.loadFile('index.html');
    window.removeMenu();
    window.setResizable(false);

    if(devTools) {
        window.webContents.openDevTools();
    }

});
