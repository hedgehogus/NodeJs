## available objects

**native objects**
- Object ,String, Array, Math, ...

**DOM**
- document, element, ...

**BOM** (browser object model)
- window, console, History, LocalStorage, XHR, ...

**Node.js API** - node -> tab
- fs, net, http, crypto, ...

node -> **REPL** - read evaluate print loop 

## Global objects

1) **global** - all available functions and objects (all created variables are not properties of global)
2) **__dirname** - directory of file
3) **__filename** - directory of file with file
4) **process** 
- process.execPath - path with file, 
- process.version - v7.4.0(node version), 
- process.platform - win32
- process.argv  - [ 'nodedir', 'filedir'] + all words passed after filename (ex: process.argv[2]) -m or --message (flags -> by indexof)
- process.stdin - stdin.on('data', data => {}) // data is Buffer object
- process.stdout - stdout.write('node')
- process.exit() - process.on('exit', () => {})
5) **module** & **exports**

**Buffer.from('node.js')** or **Buffer.from('node.js', 'utf-8')** - create buffer from string 
**Buffer.alloc(256)** - create empty buffer exact size
- buffer.toString()
- buffer.toJSON()
- buffer.write('M') -> Mode.js
- buffer.slice(0,4)
- buffer.length

## Integrated Modules

### path
- **path.basename(__filename)** - last element of directory
- **path.join(__dirname, 'files', 'uploads'))** - if we don't know environment

### fs
- **fs.readdirSync(__dirname)** - array of directory content (for reading config)
- **fs.readdir(__dirname, (error,contents) => {}** - async
- **fs.readfile('note.md', (error, data) => {}** - data is buffer, or pass 'utf-8' as second argument
- **fs.writeFile('note.md', 'content', (error) => {})**
- **const watcher = fs.watch(__dirname, (event, filename) => {})** - watcher.on('error', error => {})

## Modules

module.exports.users = users
module.exports = {users}
*exports = module.exports*
exports.users = users

###directory module
create in directory file index.js, import from other files
node modules are saving in cache - code in modules doesnt run two times 

### configured modules

module.exports = greeting => {
  return name => {
  }
}
const greet = require('./greet')('hello');





