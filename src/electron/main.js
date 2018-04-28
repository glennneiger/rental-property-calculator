const electron = require('electron')

const {
  app,
  BrowserWindow
} = electron

const createWindow = () => {
  mainWindow = new BrowserWindow()

  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closed', () => mainWindow = null)
}

let mainWindow
app.on('ready', createWindow)