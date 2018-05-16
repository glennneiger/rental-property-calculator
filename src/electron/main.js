const electron = require('electron')

const {
  app,
  BrowserWindow
} = electron

let mainWindow

/* 1100 for calculator + 400 for sidebar = 1500 */
const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 800,
    width: 1500
  })

  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)