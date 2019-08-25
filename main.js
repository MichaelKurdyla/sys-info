const {app,BrowserWindow} = require("electron");
const path = require('path');
const url = require('url');

let win; // initialize window

function createWindow(){
  win = new BrowserWindow({
    width: 800,
    height:600,
    webPreferences: {
      nodeIntegration: true
    }
}); // create window


  // load up html
  win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: 'file:',
    slashes: true
  }));


  // Open Dev tools

  win.webContents.openDevTools();

  win.on('closed', () =>{
    win = null;
  });

}


app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
  if(process.platform !== 'darwin'){
    app.quit();
   }
});
