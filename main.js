const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain}= require('electron');

//SET ENV


process.env.NODE_ENV = 'production';
let mainWindow;
let addWindow;
// Listen for app to be ready 

app.on('ready', function(){
  //Create new window
  mainWindow = new BrowserWindow({
    webPreferences:{
        nodeIntegration:true
    }
    
  });
  //Load html file into window
  mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol:'file',
      slashes:true
  })); 
//Quit app when closed

mainWindow.on('closed', function(){
    app.quit();
});

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //Insert menu
  Menu.setApplicationMenu(mainMenu);
});


//Handle createAddWindow

function createAddWindow(){
      //Create new window
  addWindow = new BrowserWindow({
      webPreferences:{
          nodeIntegration:true
      },
      width: 300,
      height: 200,
      title: 'Add Shopping List Item'
    
});

    //Garbage collection handle
    addWindow.on('close', function(){
        addWindow = null;
    });


//Load html file into window
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
    protocol:'file',
    slashes:true
})); 

}





// Catch item:add

ipcMain.on('item:add', function(e, item){
    mainWindow.webContents.send('item:add', item);
    addWindow.close();
    
});


//Create menu template
    const mainMenuTemplate = [
      
        {
            label:'File', 
            submenu:[
                {
                    label:'Add Item',
                    click(){
                        createAddWindow();
                    }
                },
                {
                    label: 'Clear Items',
                    click(){
                        mainWindow.webContents.send('item:clear')
                    }
                },
                {
                    label:'Quit',
                    acceleator: process.platform == 'darwin'? 'Command+Q':
                    'Ctrl+Q',

                    click(){
                        app.quit();
                    }
                }
            ]
        }
];

// if mac, add empty object to menu

if(process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}

//Add developer tools item if ot in prod

if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu:[
            {
                label: 'Toggle DevTools',
                acceleator: process.platform == 'darwin'? 'Command+Q':
                    'Ctrl+Q',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role:'reload'
            }
        ]

    })
    
}
