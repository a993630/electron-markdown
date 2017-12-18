const electron = require('electron')
const BrowserWindow = electron.BrowserWindow

const menuTemplate = [{
    label: 'View',
    submenu: [{
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function(item, focusedWindow) {
            if(focusedWindow) {
                if (focusedWindow.id === 1) {
                    BrowserWindow.getAllWindows().forEach(function (win) {
                        if (win.id > 1) {
                            win.close()
                        }
                    })
                }
                focusedWindow.reload()
            }
        }
    },{
        label: 'Toggle Full Screen',
        accelerator: (function () {
            if (process.platform === 'darwin') {
                return 'Ctrl+Command+F'
            } else {
                return 'F11'
            }
        })(),
        click: function (item, focusedWindow) {
            if (focusedWindow) {
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
            }
        }
    }]
}]

module.exports = menuTemplate