const electron = require('electron')

const {
  app,
  BrowserWindow
} = electron

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 800,
    width: 1100
  })

  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closed', () => mainWindow = null)
}

let mainWindow
app.on('ready', createWindow)