const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['628895414364723'] // no own
global.packname = '© sticker by adris' // nama pack sticker
global.author = 'adrisXd'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})